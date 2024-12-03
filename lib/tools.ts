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
];

export default tools;
