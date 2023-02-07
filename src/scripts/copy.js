import fs from "fs";
import path from "path";
import ora from "ora";

export function copy() {
  const spinner = ora("复制配置文件");
  spinner.start();
  const fileName = "config.json";
  const cwd = process.cwd();

  const sourceFile = path.join(cwd, "src/settings", fileName);
  const targetFile = path.join(cwd, "dist", fileName);

  fs.copyFileSync(sourceFile, targetFile);
  spinner.succeed();
}
