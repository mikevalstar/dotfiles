type fileLink = {
  projectPath: string;
  directory?: boolean;
  platformPath: {
    ubuntu: string | null;
    mac: string | null;
  };
};

const linkedFiles: fileLink[] = [
  // ~/.mvdotfiles
  {
    projectPath: "config/.mvdotfiles.zsh",
    platformPath: {
      ubuntu: `${os.homedir()}/.mvdotfiles.zsh`,
      mac: `${os.homedir()}/.mvdotfiles.zsh`,
    },
  },
  // ~/.config/starship
  {
    projectPath: "config/starship/starship.toml",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.config/starship.toml`,
      mac: `${os.homedir()}/.config/starship.toml`,
    },
  },
  // ~/.config/eza
  {
    projectPath: "config/eza",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.config/eza`,
      mac: `${os.homedir()}/.config/eza`,
    },
  },
  // ~/.config/atuin
  {
    projectPath: "config/atuin",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.config/atuin`,
      mac: `${os.homedir()}/.config/atuin`,
    },
  },
  // ~/.config/zellij
  {
    projectPath: "config/zellij",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.config/zellij`,
      mac: `${os.homedir()}/.config/zellij`,
    },
  },
  // ~/.config/LazyVim
  {
    projectPath: "config/LazyVim",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.config/LazyVim`,
      mac: `${os.homedir()}/.config/LazyVim`,
    },
  },
  {
    projectPath: "config/LazyVim",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.config/nvim`,
      mac: `${os.homedir()}/.config/nvim`,
    },
  },
  // ~/.zsh_functions
  {
    projectPath: "config/.zsh_functions",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.zsh_functions`,
      mac: `${os.homedir()}/.zsh_functions`,
    },
  },
  // ~/.config/alacritty
  {
    projectPath: "config/alacritty",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.config/alacritty`,
      mac: `${os.homedir()}/.config/alacritty`,
    },
  },
  // ~/.config/fd
  {
    projectPath: "config/fd",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.config/fd`,
      mac: `${os.homedir()}/.config/fd`,
    },
  },
  // ~/.config/tealdeer
  {
    projectPath: "config/tealdeer",
    directory: true,
    platformPath: {
      ubuntu: `${os.homedir()}/.config/tealdeer`,
      mac: `${os.homedir()}/.config/tealdeer`,
    },
  },
  // ~/.hammerspoon
  {
    projectPath: "config/hammerspoon",
    directory: true,
    platformPath: {
      ubuntu: null,
      mac: `${os.homedir()}/.hammerspoon`,
    },
  },
];

export default linkedFiles;
