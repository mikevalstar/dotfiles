--[[
Colors - https://coolors.co/3c3744-090c9b-3066be-b4c5e4-fbfff1
- Black Coffee - #3C3744
- Duke Blue - #090C9B
- True Blue - #3066BE
- Light Steel Blue - #B4C5E4
- Ivory - #FBFFF1
-- ]]
local wezterm = require 'wezterm'

return {
  font = wezterm.font 'Fira Code',
  scrollback_lines = 10000,
  tab_max_width = 26,
  initial_cols = 180,
  initial_rows = 48,
  window_background_opacity = 0.88,
  leader = { key = 's', mods = 'CMD', timeout_milliseconds = 1000 },
  allow_win32_input_mode=true,
  keys = {
    -- Tab switchers
    { key = '1', mods = 'CMD', action = wezterm.action.ActivateTab(0) },
    { key = '2', mods = 'CMD', action = wezterm.action.ActivateTab(1) },
    { key = '3', mods = 'CMD', action = wezterm.action.ActivateTab(2) },
    { key = '4', mods = 'CMD', action = wezterm.action.ActivateTab(3) },
    { key = '5', mods = 'CMD', action = wezterm.action.ActivateTab(4) },
    { key = '6', mods = 'CMD', action = wezterm.action.ActivateTab(5) },
    { key = '7', mods = 'CMD', action = wezterm.action.ActivateTab(6) },
    { key = '8', mods = 'CMD', action = wezterm.action.ActivateTab(7) },
    { key = '9', mods = 'CMD', action = wezterm.action.ActivateTab(8) },

    { key = 'LeftArrow', mods = 'CMD|SHIFT', action = wezterm.action.ActivateTabRelative(-1) },
    { key = 'RightArrow', mods = 'CMD|SHIFT', action = wezterm.action.ActivateTabRelative(1) },

    -- Copy/Paste
    { key = 'v', mods = 'CMD', action = wezterm.action.PasteFrom 'Clipboard' },
    {
      key = 'c',
      mods = 'CMD|SHIFT',
      action = wezterm.action.CopyTo 'Clipboard',
    },
    {
      key = 't',
      mods = 'CMD',
      action = wezterm.action.SpawnTab 'DefaultDomain',
    },
    -- search
    {
      key = 'f',
      mods = 'CMD',
      action = wezterm.action.Search {CaseInSensitiveString=""},
    },
    {
      key = 'f',
      mods = 'CMD|SHIFT',
      action = wezterm.action.Search {CaseSensitiveString=""},
    },
    {
      key = 'f',
      mods = 'CMD|ALT',
      action = wezterm.action.Search "CurrentSelectionOrEmptyString",
    },
    -- Send "CMD-A" to the terminal when pressing CMD-A, CMD-A
    {
      key = 'a',
      mods = 'LEADER|CMD',
      action = wezterm.action.SendString '\x01',
    },
    -- Send home key on arrow left
    {
      key = 'LeftArrow',
      mods = 'CMD',
      action = wezterm.action.SendString '\x1bOH',
    },
    -- end key on arrow right
    {
      key = 'RightArrow',
      mods = 'CMD',
      action = wezterm.action.SendString '\x1bOF',
    },
    -- Terminal splitter
    {
      key = '|',
      mods = 'LEADER|SHIFT',
      action = wezterm.action.SplitHorizontal { domain = 'CurrentPaneDomain' },
    },
    {
      key = '-',
      mods = 'LEADER',
      action = wezterm.action.SplitVertical { domain = 'CurrentPaneDomain' },
    },
  },
  
}
