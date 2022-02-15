<script setup lang="ts">
import {useAppStore} from '@/store/app'
  const appStore = useAppStore();
// 订阅
// store.$subscribe((mutation, state)=>{
//   console.log(mutation, state,'...........')
//   localStorage.setItem('cart', JSON.stringify(state))
// }, { detached: true })

const clickEdit = ()=>{

   appStore.changeName()
  //  defaultStore.changeComState()

}
</script>

<template>


<button @click="clickEdit">修改数据</button>
<hr>
<div>{{appStore.name}}</div>

</template>

<style scoped>

</style>