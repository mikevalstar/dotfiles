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

### Aliases / configs

# Next level of an ls 
# options :  --no-filesize --no-time --no-permissions --no-user --color=always --icons=always
export EZA_CONFIG_DIR="$HOME/.config/eza"
alias ls="eza --long " 