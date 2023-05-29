import fs from "fs";
import path from "path";
import archiver from "archiver";
import chalk from "chalk";
import ora from "ora";
import { copy } from './copy.js'

const cwd = process.cwd();

const target = ["dist"];

copy()

const spinner = ora('代码压缩')
spinner.start()

if(!fs.existsSync(path.join(cwd,'output'))) {
  fs.mkdirSync(path.join(cwd,'output'))
}

const output = fs.createWriteStream(path.join(cwd, "output", "/dist.zip"));
const archive = archiver("zip", {
  zlib: { level: 9 },
});

archive.on("error", function (err) {
  spinner.fail()
  throw err;
});

output.on("close", function () {
  spinner.succeed()
  console.log(
    chalk.green(`
     --------- ---------压缩完毕--------- ---------
     生成文件大小${(archive.pointer() / 1024).toFixed(1)}kB
     请在当前项目路径下寻找 dist.zip 文件,系统路径为 ${cwd}\\output\\dist.zip
     `)
  );
});

archive.pipe(output);
for (let i of target) {
  archive.directory(i, false);
}
archive.finalize();
