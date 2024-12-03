## Check for min setup: homebrew
# Check for Homebrew
if test ! $(which brew); then
  echo "Installing Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
  echo "Homebrew Installed"
fi

# rust
if test ! $(which rustup); then
  echo "Installing Rust..."
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
else
  echo "Rust Installed"
fi

# bun
if test ! $(which bun); then
  echo "Installing Bun..."
  curl -fsSL https://bun.sh/install | bash
else
  echo "Bun Installed"
fi

# node
if test ! $(which fnm); then
  echo "Installing Node with FNM..."
  curl -fsSL https://fnm.vercel.app/install | bash
  source ~/.zshrc
  fnm use --install-if-missing 22
  fnm default 22
else
  echo "Node Installed"
fi

# pnpm
if test ! $(which pnpm); then
  echo "Installing PNPM..."
  curl -fsSL https://get.pnpm.io/install.sh | sh -
else
  echo "PNPM Installed"
fi

# zx for the rest of the scripts
if test ! $(which zx); then
  echo "Installing ZX..."
  npm install -g zx
else
  echo "ZX Installed"
fi