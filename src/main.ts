import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import { createRouter, createWebHashHistory } from "vue-router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "./assets/base.less";
import routerConfig from "./routerConfg";

const app = createApp(App);

// 使用vue-router
const router = createRouter({
  history: createWebHashHistory(),
  routes: routerConfig,
});

// 导入element-icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`icon-${key.toLowerCase()}`, component);
}

app.use(router);
app.use(ElementPlus);
app.use(createPinia());
app.mount("#app");
