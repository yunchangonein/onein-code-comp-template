import type { App } from "vue";
import Main from "../App.vue";
import pkg from "../../package.json";

Main.install = (app: App) => {
  app.component(pkg.name, Main);
};

export default Main