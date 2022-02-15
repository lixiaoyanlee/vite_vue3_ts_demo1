import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HelloWorld from "comps/HelloWorld.vue";
const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "home", component: HelloWorld },
];

// 使用工厂函数创建router
const router = createRouter({
  history: createWebHashHistory(), // 指定路由的模式,此处使用的是hash模式
  routes, // 路由地址
});

export default router;
