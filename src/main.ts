import { createApp } from "vue";
import ElementPlus from "element-plus";
import { createRouter, createWebHashHistory } from "vue-router";
import "./assets/base.less";
import routerConfig from "./routerConfg";
import "element-plus/dist/index.css";
import App from "./App.vue";
const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes: routerConfig,
});

app.use(router);
app.use(ElementPlus);
app.mount("#app");
