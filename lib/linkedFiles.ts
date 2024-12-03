type fileLink = {
  projectPath: string;
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
];

export default linkedFiles;
