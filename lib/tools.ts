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
];

export default tools;
