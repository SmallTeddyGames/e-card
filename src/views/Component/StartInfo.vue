<script lang='ts' setup>
const showGameInfo = ref(false);
const show=ref(true)
const startGame=()=>{
  showGameInfo.value = true;
  setTimeout(() => {
    show.value=false
  }, 3000)
}
onMounted(() => {
 
})
</script>

<template>
  <div v-if="show" flex-center flex-col h-screen w-screen relative font-size-40px bg-gray:50>
    <div v-if="!showGameInfo"><button @click="startGame">开始</button></div>
   <div v-if="showGameInfo">
    <div w-160px h-56px flex-center rd-8px gap-5>第 <span text-green> X </span> 局</div>
    <div w-240px h-56px flex-center rd-8px>角色 ： <span text-red>国王</span> </div>
   </div>
  </div>
</template>
