alias fuck="sudo !!"
alias genpass="openssl rand -base64 20"
alias sha='shasum -a 256 '
alias hostit='php -S localhost:8000'
alias wezterm='/Applications/WezTerm.app/Contents/MacOS/wezterm'
alias pn="pnpm"
alias locchange="git diff --shortstat"
alias zj="zellij"

# git
alias fcheckout="git branch | grep -v \"^\\*\" | fzf --height=20% --reverse --info=inline | xargs git checkout"

# coding stuff
alias resetnode="find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +"

# Neovim Helpers
alias vim="nvim"
alias nano="nvim"

# Wezterm Helpers
alias wt="wezterm"
alias wtt="wezterm cli set-tab-title"

# fzf helpers
alias cdd="cd \$(fd --type d --strip-cwd-prefix --hidden --exclude .git | fzf)"
