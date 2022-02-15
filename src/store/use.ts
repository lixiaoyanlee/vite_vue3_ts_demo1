import { mapState,defineStore,mapStores,mapActions,mapWritableState  } from 'pinia'

const useCounterStore = defineStore('counter', {
    state: () => ({ counter: 0 }),
    getters: {
      double: (state) => state.counter * 2,
    },
    actions: {
      increment() {
        this.counter++
      }
    }
  })
  const useUserStore = defineStore('user', {
    // ...
  })
export default {
//   computed: {
//     // 在组件内允许访问 this.counter 
//     // 与从 store.counter 读取一样
//     // ...mapState(useCounterStore, ['counter'])
//     // 与上面一样但是将注册它为 this.myOwnName
//     ...mapState(useCounterStore, {
//       myOwnName: 'counter',
//       // 你也可以写一个函数来访问 store
//       double: store => store.counter * 2,
//       // 它也能访问 `this` ，但是它不会正确地标注类型...
//       magicValue(store) {
//         return store.double + this.counter
//       },
//     }),
//   },
computed: {
    // 其它计算属性
    // ...
    // 允许访问 this.counterStore 和 this.userStore
    ...mapStores(useCounterStore, useUserStore),
    // 允许读取 this.count 和 this.double
    ...mapState(useCounterStore, ['counter', 'double']),
    ...mapWritableState(useCounterStore, ['counter'])
  },
  methods: {
    // 允许访问 this.increment()
    ...mapActions(useCounterStore, ['increment']),
  },
}