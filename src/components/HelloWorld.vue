<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'

import { storeToRefs } from 'pinia'
import { useMainStore } from '@/store'
const store = useMainStore()

// 这种结构store中的数据是有问题的，不是响应式的数据
// const { countPinia} = store
// 这样是响应式的数据，因为pinia其实就是把state数据都做了 reactive 处理了
const { countPinia } = storeToRefs(store)
console.log(countPinia.value)

const clickEdit = ()=>{
  // 方式一：最简单的方式
  store.countPinia++

  // 方式二：如果需要修改多个数据，建议使用 $path 批量更新
  store.$patch({
    countPinia: store.countPinia+1,
    title:'修改'
  })
}
</script>

<template>
<p>{{countPinia}}</p>
<p>{{store.title}}</p>
<button @click="clickEdit">修改数据</button>
</template>

<style scoped>

</style>

