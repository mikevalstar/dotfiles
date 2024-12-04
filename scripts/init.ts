#!/usr/bin/env zx
import "zx/globals";

import chalk from "chalk";
import ora from "ora";

import toolList from "../lib/tools.ts";
import linkedFiles from "../lib/linkedFiles.ts";

$.quiet = true; // don't display error messages

// some globals
const projectPath = path.resolve(__dirname, ".."); //TODO: Log file for each run of the app
let platform: "ubuntu" | "mac" | null = null;

// check if mac
try {
  await $`which brew`;
  platform = "mac";
} catch (error) {}

// check if ubuntu
try {
  await $`ls /etc/lsb-release`;
  platform = "ubuntu";
} catch (error) {}

if (!platform) {
  console.error("Unsupported platform");
  process.exit(1);
}

// create log folder if it doesn't in the current directory
console.info(chalk.blue("Checking log folder exists"));
await $`mkdir -p log`;

// Loop through and install tools
console.info(chalk.blue("Checking installed tools..."));

let all = false;

for (let tool of toolList) {
  let findCommand = tool.findCommand[platform];
  try {
    await findCommand();
    console.info(chalk.yellow(`${tool.name} installed`));
  } catch (error) {
    console.warn(chalk.red(`${tool.name} is not installed`));

    let q = "";

    if (!all) {
      q = await question(
        chalk.blue(`Do you want to install ${tool.name}? (Yes/No/All)`)
      );
    }

    if (q.toLocaleLowerCase() === "a") {
      all = true;
    }

    if (all || q.toLocaleLowerCase() === "y") {
      let installCommand = tool.installCommand[platform];

      const toolSpinner = ora(chalk.blue(`Installing ${tool.name}...`)).start();

      await installCommand();

      toolSpinner.succeed(chalk.green(`${tool.name} installed successfully`));
    }
  }
}

// File linking
console.info(chalk.blue("Checking linked files..."));

for (let file of linkedFiles) {
  let platformPath = file.platformPath[platform];
  let projectPath = path.resolve(__dirname, "..", file.projectPath);

  // check if file already exists
  let exists = false;
  try {
    await $`ls ${platformPath}`;
    exists = true;
  } catch (error) {}

  // check if already linked to the project version of the file
  let linked = false;
  let linkedElsewhere = false;
  try {
    const pth = await $`readlink ${platformPath}`;
    if (pth.stdout.trim() === projectPath.trim()) {
      linked = true;
    } else {
      linkedElsewhere = true;
    }
  } catch (error) {}

  // Linking will force overwrite if we get here
  const linkIt = async (remove?: boolean) => {
    try {
      if (remove) {
        await $`rm -rf ${platformPath}`;
      }
      await $`ln -sfF ${projectPath} ${platformPath}`;
      console.info(
        chalk.green(`${file.projectPath} linked to ${platformPath}`)
      );
    } catch (error) {
      console.warn(chalk.red(`${file.projectPath} is not linked`));
    }
  };

  // Check the different possible states
  if (exists && linkedElsewhere) {
    console.warn(
      chalk.red(`${platformPath} is already linked to another file`)
    );
    const q = await question("Do you want to overwrite it? (Yes/No)");
    if (q.toLocaleLowerCase() === "y") {
      await linkIt(true);
    }
  } else if (exists && !linked) {
    console.warn(chalk.red(`${platformPath} already exists`));
    const q = await question("Do you want to overwrite it? (Yes/No)");
    if (q.toLocaleLowerCase() === "y") {
      await linkIt(true);
    }
  } else if (!exists) {
    await linkIt();
  } else {
    console.info(
      chalk.yellow(`${file.projectPath} already linked to ${platformPath}`)
    );
  }
}

// Include project in zshrc file
console.info(chalk.blue("Checking .zshrc file for global include..."));

let zshrcPath = `${os.homedir()}/.zshrc`;
let includePath = `${os.homedir()}/.mvdotfiles.zsh`;
const includeString = `[ -f ${includePath} ] && source ${includePath}`;

// read the file and check for the string
let zshrcFile = await fs.readFile(zshrcPath, "utf8");
if (!zshrcFile.includes(includeString)) {
  console.info(chalk.yellow("Adding ~/.mvdotfiles.zsh to .zshrc"));
  await fs.appendFile(zshrcPath, `\n\n## MV Dotfiles\n${includeString}\n`);
} else {
  console.info(chalk.yellow(".mvdotfiles.zsh already included in .zshrc"));
}

// Final thoughts
console.info(chalk.green("run `source ~/.zshrc` to apply changes"));
