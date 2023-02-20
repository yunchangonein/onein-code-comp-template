# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

```
onein-code-comp-template
├─ .env.debug
├─ index.html
├─ output                    // 压缩后文件包目录
├─ package-lock.json
├─ package.json
├─ public
├─ README.md
├─ shims-ext.d.ts
├─ src
│  ├─ App.vue
│  ├─ assets                 // 静态资源目录
│  │  ├─ add.png
│  │  └─ mazhao.jpg
│  ├─ components             // 子组件目录
│  │  └─ ListItem.vue
│  ├─ lib                    // 库模式目录
│  │  ├─ index.ts
│  │  └─ index.vue           // 代码组件主文件
│  ├─ main.js
│  ├─ scripts                // 脚本目录
│  │  ├─ build-zip.js        // 压缩脚本
│  │  ├─ copy.js             
│  │  ├─ debug.js            // 调试脚本
│  │  └─ upload.js           // 代码上传脚本
│  ├─ settings               // 组件配置目录
│  │  ├─ config.json         // 组件名称，调试相关配置
│  │  └─ props.json          // 组件数据面板，事件面板配置
│  └─ style.css
├─ tsconfig.json
└─ vite.config.js

```