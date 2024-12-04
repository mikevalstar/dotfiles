## zoxide setup for better cd
if [[ -x "$(command -v zoxide)" ]]; then
    eval "$(zoxide init --cmd cd zsh)"
else
    echo "zoxide not found, and not setup"
fi

## atuin
if [[ -x "$(command -v atuin)" ]]; then
    eval "$(atuin init zsh)"
else
    echo "atuin not found, and not setup"
fi

## fzf
if [[ -x "$(command -v fzf)" ]]; then
    source <(fzf --zsh)
else
    echo "fzf not found, and not setup"
fi
export FZF_COMPLETION_TRIGGER='~~'
export FZF_DEFAULT_COMMAND="fd . $HOME"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_ALT_C_COMMAND="fd -t d . $HOME"
export FZF_CTRL_T_OPTS="--preview 'bat --color=always --style=header,grid --line-range :500 {}' --bind 'ctrl-/:change-preview-window(down|hidden|)'"

## Terminal Alacritty
fpath+=${ZDOTDIR:-~}/.zsh_functions

### Aliases / configs

# Quick helpful items
alias c="clear"
alias doit="sudo !!"
alias genpass="openssl rand -base64 20"
alias sha='shasum -a 256 '
alias pn="pnpm"
alias vim="nvim"
alias lvim="NVIM_APPNAME=LazyVim nvim"

# Next level of an ls 
# options :  --no-filesize --no-time --no-permissions --no-user --color=always --icons=always
export EZA_CONFIG_DIR="$HOME/.config/eza"
alias ls="eza --long " 