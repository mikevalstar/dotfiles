## zoxide setup for better cd
if [[ -x "$(command -v zoxide)" ]]; then
    eval "$(zoxide init --cmd zsh)"
else
    echo "zoxide not found, and not setup"
fi

## atuin
if [[ -x "$(command -v atuin)" ]]; then
    eval "$(atuin init zsh)"
else
    echo "atuin not found, and not setup"
fi