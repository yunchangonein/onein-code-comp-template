import fs from "fs";
import path from "path";
import ora from "ora";

function collection() {
  const fileName = "props.json";
  const filePath = path.join(process.cwd(), "src/settings", fileName);
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  let packages = [];
  const dependencies = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8")
  ).dependencies;
  for (const [key, value] of Object.entries(dependencies)) {
    let version = value.replace(/[\^\~]/g, "");
    packages.push({
      name: key,
      version: version,
    });
  }
  jsonData['packages'] = packages;
  fs.writeFileSync(filePath, JSON.stringify(jsonData));
}

export function copy() {
  const spinner = ora("复制配置文件");
  spinner.start();

  collection();
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
