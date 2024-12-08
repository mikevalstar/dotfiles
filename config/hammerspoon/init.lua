-- global task for the quake term
local qtask = nil
local home = os.getenv("HOME")

function findTerminal()
  local logger = hs.logger.new('Quake Terminal', 'debug')
  -- logger:d('Finding Alacritty Quake Terminal')
  
  if qtask then
    if qtask:isRunning() then
      -- logger:d('Quake Terminal PID: ' .. qtask:pid())
      local app = hs.application.get(qtask:pid())
      if app then 
        local window = app:mainWindow()
        if window then
          return app, window
        else
          logger:d('App found but no window - should not happen')
          -- qtask = nil
        end
      end
    else
      qtask = nil
    end
  end

  return nil
end

hs.hotkey.bind({"cmd"}, "`", function()

  local logger = hs.logger.new('Quake Terminal', 'debug')

  function moveWindow(termWindow)
    local scrFrame = hs.screen.mainScreen():frame()
    local currentSpace = hs.spaces.activeSpaceOnScreen(hs.screen.mainScreen():id())
    local moved, error = hs.spaces.moveWindowToSpace(termWindow, currentSpace, true)
    -- ^ currently broken: https://github.com/Hammerspoon/hammerspoon/issues/3698

    termWindow:setFrame({
      x = scrFrame.x,
      y = scrFrame.y,
      w = scrFrame.w,
      h = scrFrame.h * 0.25
    })
  end

  function launchTerminal()
    logger:d('Launching Alacritty - quake terminal')
    local qtermconfig = home .. '/.config/alacritty/quaketerm.toml'
    qtask = hs.task.new('/Applications/Alacritty.app/Contents/MacOS/alacritty', nil, { '--config-file', qtermconfig }):start()

    -- wait 2 seconds for the terminal to start, then setup the watchers
    hs.timer.doAfter(0.5, function() -- TODO: make this some sort of loop waiting for it to open 
      local qterm, qwindow = findTerminal()
      if qterm then
        moveWindow(qwindow)
        qwindow:focus()
      end
    end)
  end

  local qterm, qwindow = findTerminal()
  if qterm then
    if qwindow:isVisible() then
      logger:d('Quake Terminal is frontmost')
      qterm:hide()
    else
      logger:d('Quake Terminal is not focused')
      qwindow:focus()
      moveWindow(qwindow)
    end
  else
    launchTerminal()
  end
end)

-- Hide quake window when lost focus
hs.window.filter.default:subscribe(hs.window.filter.windowFocused, function(window, appName)
  local qterm, qwindow = findTerminal()
  if qterm then
    if qwindow ~= window then
      qterm:hide()
    end
  end
end)

-- Hammerspoon stuff
hs.hotkey.bindSpec({ { "ctrl", "cmd", "alt" }, "y" }, hs.toggleConsole)
hs.hotkey.bindSpec({ { "ctrl", "cmd", "alt" }, "r" }, hs.reload)