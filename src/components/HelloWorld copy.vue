<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useStore } from '@/store/index';

import http from '../utils/server'
import Comp from './comp/Comp'
import useMousePosition from '@/hooks/useMousePosition'
import imgLogo from './logo.png'
const store = useStore()


const count = ref(0)
const showCount = computed(() => {
  return store.getters['getCount']
})
const { x, y } = useMousePosition()

const addBtn = () => {
  store.commit('setCount', ++count.value)
}

const imgUrl = new URL('./logo.png', import.meta.url)
const imgUrlVal = ref(imgUrl.href)
console.log(imgUrl)
console.log('import.meta.url',import.meta)
// fetch("/api/getUsers")
//   .then( response => {
//     return  response.json()
//   })
//   .then(data => {
//     console.log('/api/getUsers',data)
//   })
//  try {
//    let data = await http.get({url:"/getUsers"})
//    console.log(data,'data')
//  } catch (error) {
//    console.log(error,'error')
//  }

const inputRef = ref<HTMLElement | null>(null)
const inputValue = ref('')
onMounted(() => {
  inputRef.value && inputRef.value.focus()
})
</script>

<template>
<img :src="imgLogo">
<img :src="imgUrlVal">
  <h1>{{ showCount }}</h1>
  <div class="show-mouse-box">使用/hooks/useMousePosition： x: {{ x }}, y: {{ y }}</div>
  <br />
  <input type="text" class="input-text" />---
  <input type="text" ref="inputRef" class="input-text" />
  <br />


  <button type="button" @click="addBtn">加1</button>
  <van-button type="success">主要按钮</van-button>
  <Comp msg="HelloWord组件传值Comp"></Comp>
</template>

<style scoped>
.show-mouse-box {
  font-size: 14px;
}
.input-text {
  width: 200px;
  height: 20px;
  margin-bottom: 5px;
}
</style>

