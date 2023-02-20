import { execa } from 'execa'
import chalk from 'chalk'

await execa('npm', ['run', 'build:debug'])
console.log(chalk.green('重新构建'))
await execa('npm', ['run', 'deploy'])
console.log(chalk.green('完成压缩'))
await execa('npm', ['run', 'upload'])
console.log(chalk.green('代码上传成功！请刷新设计器'))