import { defineStore } from "pinia";

export const useAppStore = defineStore("app",{
  state: () => {
    return {
      name: "app store state: name",
      title:'标题',
      sub:'pinia',
      content:'本文是针对pinia的知识的分享。。。'
    };
  },
  actions: {
    changeName() {
      this.$patch((state: { name: string; }) => {
        state.name = "修改";
      });
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'my_store_app',
        storage: localStorage,
        paths: ['name', 'sub']
      }
    ]
  },
});
