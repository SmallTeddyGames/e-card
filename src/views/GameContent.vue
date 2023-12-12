<script lang='ts' setup>
import { useStorage } from '@vueuse/core'

const bgImage = useStorage('bgImage', 1, localStorage) || ref(1)

</script>

<template>
  <div w-full h-full flex-center bg-center bg-cover bg-no-repeat :class="`bg-${bgImage}`">
    <div text-3xl> Game Content</div>
  </div>
</template>

<style>
.bg-1 {
  background-image: url(../assets/bg-1.jpg);
}
.bg-2 {
  background-image: url(../assets/bg-2.jpg);
}
.bg-3 {
  background-image: url(../assets/bg-3.jpg);
}
.bg-4 {
  background-image: url(../assets/bg-4.jpg);
}
</style>
