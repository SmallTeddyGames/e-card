<script lang='ts' setup>
const showGameInfo = ref(true)

onMounted(() => {
  setTimeout(() => {
    showGameInfo.value = false
  }, 3000)
})
</script>

<template>
  <div v-if="showGameInfo" flex-center flex-col h-screen w-screen relative font-size-40px bg-gray:50>
    <div w-160px h-56px flex-center rd-8px gap-5>第 <span text-green> X </span> 局</div>
    <div w-240px h-56px flex-center rd-8px>角色 ： <span text-red>国王</span> </div>
  </div>
</template>
