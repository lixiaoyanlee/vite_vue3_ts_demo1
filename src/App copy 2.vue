<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'

import { storeToRefs,mapState  } from 'pinia'
import { useMainStore,useDefaultStore } from '@/store'

// import optionsApiStore from '@/store/use'
const store = useMainStore()

// const defaultStore = useDefaultStore()
// 这种结构store中的数据是有问题的，不是响应式的数据
// const { countPinia} = store
// 这样是响应式的数据，因为pinia其实就是把state数据都做了 reactive 处理了
const { countPinia } = storeToRefs(store)
console.log(countPinia.value,'optionsApiStore')

// 订阅
// store.$subscribe((mutation, state)=>{
//   console.log(mutation, state,'...........')
//   localStorage.setItem('cart', JSON.stringify(state))
// }, { detached: true })

const clickEdit = ()=>{
  // 方式一：最简单的方式
  // store.countPinia++
  // store.title = '修改'

  // 方式二：如果需要修改多个数据，建议使用 $path 批量更新，相比方式一：这种写法不是写法上的简单优化，$path是有性能的优化
  // store.$patch({
  //   countPinia: store.countPinia+1,
  //   title:'修改',
  //   arr:[...store.arr,3]
  // })

  // 方式三：$patch 使用一个函数 也是批量更新  
  // store.$patch(state=>{
  //   state.countPinia++
  //   state.title = '修改'
  //   state.arr.push(3)
  // })

  // 方式四：逻辑比较多的时候，可以封装到action
  // store.changeState()
   store.changeState2(10)
  //  defaultStore.changeComState()

}
</script>

<template>

<p>{{countPinia}}</p>
<p>{{store.title}}</p>
<p>{{store.arr}}</p>

<p>{{store.getCount}}</p>
<button @click="clickEdit">修改数据</button>
<hr>


</template>

<style scoped>

</style>