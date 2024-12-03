#!/bin/bash
## Step 1: Determine the OS
# Mac - default
OS="mac"
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Linux
if [ "$(uname)" == "Linux" ]; then
  if [ -f /etc/lsb-release ]; then
    OS="ubuntu"
  elif [ -f /etc/centos-release ]; then
    OS="centos"
  fi
fi

echo "OS: $OS"

## if not mac or ubuntu break
if [ "$OS" != "mac" ] && [ "$OS" != "ubuntu" ]; then
  echo "OS not supported"
  exit 1
fi

## ask to continue
read -p "Continue Setup? (y/n) " -n 1 -r
echo ""

## Check for basic tools
if [ "$OS" == "mac" ]; then
  bash $SCRIPT_DIR/scripts/mac_tools.sh
fi

if [ "$OS" == "ubuntu" ]; then
  bash $SCRIPT_DIR/scripts/ubuntu_tools.sh
fi

## install up the pnpm packages before continuing
pnpm install

## run the generic init
pnpm run init