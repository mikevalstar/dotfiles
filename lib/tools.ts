import "zx/globals";

type cliTool = {
  name: string;
  description: string;
  findCommand: {
    mac: () => ProcessPromise;
    ubuntu: () => ProcessPromise;
  };
  installCommand: {
    mac: () => ProcessPromise;
    ubuntu: () => ProcessPromise;
  };
};

const tools: cliTool[] = [
  // fzf - fuzzy find
  {
    name: "fzf",
    description: "Fuzzy Finder",
    findCommand: {
      mac: () => $`which fzf`,
      ubuntu: () => $`which fzf`,
    },
    installCommand: {
      mac: () => $`brew install fzf`,
      ubuntu: () => $`sudo apt-get install fzf`,
    },
  },
  // fd - better find
  {
    name: "fd",
    description: "A simple, fast and user-friendly alternative to find",
    findCommand: {
      mac: () => $`which fd`,
      ubuntu: () => $`which fd`,
    },
    installCommand: {
      mac: () => $`brew install fd`,
      ubuntu: () => $`sudo apt-get install fd-find`,
    },
  },
  // zoxide - better cd
  {
    name: "zoxide",
    description: "A smarter cd command",
    findCommand: {
      mac: () => $`which zoxide`,
      ubuntu: () => $`which zoxide`,
    },
    installCommand: {
      mac: () => $`brew install zoxide`,
      ubuntu: () => $`cargo install zoxide --locked`,
    },
  },
  // atuin - replaces command history
  {
    name: "atuin",
    description: "A file manager for the terminal",
    findCommand: {
      mac: () => $`which atuin`,
      ubuntu: () => $`which atuin`,
    },
    installCommand: {
      mac: () => $`brew install atuin`,
      ubuntu: () =>
        $`curl --proto '=https' --tlsv1.2 -LsSf https://setup.atuin.sh | sh`,
    },
  },
  // eza ls replacement with icons
  {
    name: "eza",
    description: "A better ls command",
    findCommand: {
      mac: () => $`which eza`,
      ubuntu: () => $`which eza`,
    },
    installCommand: {
      mac: () => $`cargo install eza --locked`,
      ubuntu: () => $`cargo install eza --locked`,
    },
  },
  // bat - better cat
  {
    name: "bat",
    description: "A cat clone with wings",
    findCommand: {
      mac: () => $`which bat`,
      ubuntu: () => $`which bat`,
    },
    installCommand: {
      mac: () => $`brew install bat`,
      ubuntu: () => $`sudo apt-get install bat`,
    },
  },
  // ripgrep - better grep
  {
    name: "ripgrep",
    description: "A search tool like grep and The Silver Searcher",
    findCommand: {
      mac: () => $`which rg`,
      ubuntu: () => $`which rg`,
    },
    installCommand: {
      mac: () => $`brew install ripgrep`,
      ubuntu: () => $`sudo apt-get install ripgrep`,
    },
  },
  // sd - better sed
  {
    name: "sd",
    description: "An intuitive find & replace CLI",
    findCommand: {
      mac: () => $`which sd`,
      ubuntu: () => $`which sd`,
    },
    installCommand: {
      mac: () => $`cargo install sd --locked`,
      ubuntu: () => $`cargo install sd --locked`,
    },
  },
  // tealdeer - tldr in rust
  {
    name: "tealdeer",
    description: "A very fast implementation of tldr in Rust",
    findCommand: {
      mac: () => $`which tldr`,
      ubuntu: () => $`which tldr`,
    },
    installCommand: {
      mac: () => $`cargo install tealdeer --locked`,
      ubuntu: () => $`cargo install tealdeer --locked`,
    },
  },
  // zellij - terminal multiplexer
  {
    name: "zellij",
    description: "A terminal multiplexer",
    findCommand: {
      mac: () => $`which zellij`,
      ubuntu: () => $`which zellij`,
    },
    installCommand: {
      mac: () => $`cargo install zellij --locked`,
      ubuntu: () => $`cargo install zellij --locked`,
    },
  },
  // neovim
  {
    name: "nvim",
    description: "A better vim",
    findCommand: {
      mac: () => $`which nvim`,
      ubuntu: () => $`which nvim`,
    },
    installCommand: {
      mac: () => $`brew install neovim`,
      ubuntu: () => $`sudo apt-get install neovim`,
    },
  },
  // bottom - better top
  {
    name: "bottom",
    description: "A cross-platform graphical process/system monitor",
    findCommand: {
      mac: () => $`which btm`,
      ubuntu: () => $`which btm`,
    },
    installCommand: {
      mac: () => $`cargo install bottom --locked`,
      ubuntu: () => $`cargo install bottom --locked`,
    },
  },
  // tree - better ls
  {
    name: "tree",
    description:
      "A directory listing program displaying a depth indented list of files",
    findCommand: {
      mac: () => $`which tree`,
      ubuntu: () => $`which tree`,
    },
    installCommand: {
      mac: () => $`brew install tree`,
      ubuntu: () => $`sudo apt-get install tree`,
    },
  },
  // entr - run commands when files change
  {
    name: "entr",
    description: "Run arbitrary commands when files change",
    findCommand: {
      mac: () => $`which entr`,
      ubuntu: () => $`which entr`,
    },
    installCommand: {
      mac: () => $`brew install entr`,
      ubuntu: () => $`sudo apt-get install entr`,
    },
  },
  // thefuck - correct previous command
  {
    name: "thefuck",
    description: "Magnificent app which corrects your previous console command",
    findCommand: {
      mac: () => $`which thefuck`,
      ubuntu: () => $`which thefuck`,
    },
    installCommand: {
      mac: () => $`brew install thefuck`,
      ubuntu: () =>
        $`sudo apt install python3-dev python3-pip python3-setuptools; pip3 install thefuck --user`,
    },
  },
];

export default tools;
