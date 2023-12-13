<script lang='ts' setup>
import GameMain from '../Game/GameMain.vue';
import { useStorage } from '@vueuse/core'

const bgImage = useStorage('bgImage', 1, localStorage) || ref(1)

</script>

<template>
  <div w-full h-full flex-center bg-center bg-cover bg-no-repeat :style="{backgroundImage: `url(src/assets/bg-${bgImage}.jpg)`}">
    <GameMain />
  </div>
</template>
