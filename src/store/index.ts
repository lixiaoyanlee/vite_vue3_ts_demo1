import { defineStore } from "pinia";
import { ref } from 'vue'
// 1.定义容器
// 参数1：容器的ID，必须唯一 将来pinia会把所有的容易挂载到根容器
// 参数2：选项对象
// 返回值是一个函数 调用得到
export const useMainStore = defineStore("main", {
  /**
   * 类似于组件的data 用来存储全局状态
   * 1.必须是函数：这样是为了在服务器渲染的时候避免交叉请求导致的数据状态污染
   * 2. 必须还是箭头函数，这是为了更好的 TS 类型推导
   */
  state: () => {
    return {
      countPinia: 100,
      title: "pinia",
      arr: [1, 2],
    };
  },
  /**
   * 类似组件的computed 用于封装计算属性，有缓存的功能
   */
  getters: {
    /**
     * 
     * @param state 函数接受一个可选参数：state 状态对象
     * 不使用state也可以使用 this
     * 如果使用了this 这必须手动制定函数的返回值的类型 否则类型推导不出来
     * @returns 
     */
    getCount(state):Number{
      return state.countPinia +10
    }
  },
  /**
   * 类似于组件的methods 封装有误逻辑 修改 state
   */
  actions: {
    // 注意：不能使用箭头函数定义action 因为使用箭头函数 函数内部的this指向就是外部
    changeState() {
      // this.countPinia++
      // this.title = "在action中修改title"
      // this.arr.push(3)

      this.$patch(state => {
        state.countPinia++;
        state.title = "修改";
        state.arr.push(3);
      });
    },
    changeState2(num:number){
      this.countPinia += num;
    }
  },
  
});
// 2.使用容器中的state

// 3.修改state

// 4.容器中的action的state



export const useCounterStoreForSetup = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id:'default',
  state: () =>  ({
    counter: 0,
    name: 'Eduardo',
  }),
})

// 使用组合式api定义 使用setup模式定义
export const useDefaultStore = defineStore('default',()=>{
  const countCom = ref<number>(1);
  function changeComState() {
    console.log('........')
    countCom.value++;
  }
  return { countCom,changeComState};
})