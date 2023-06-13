import fs from "fs";
import path from "path";
import ora from "ora";

export function copy() {
  const spinner = ora("复制配置文件");
  spinner.start();
  const fileNames = ["props.json", "config.json"];
  const cwd = process.cwd();

  let sourceFile = ""
  let targetFile = ""
  for (let name of fileNames) {
    sourceFile = path.join(cwd, "src/settings", name);
    targetFile = path.join(cwd, "dist", name);
    fs.copyFileSync(sourceFile, targetFile);
  }
  spinner.succeed();
}
