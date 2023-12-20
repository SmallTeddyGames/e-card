<script lang="ts" setup>
import { useStorage } from '@vueuse/core'

const bgImage = useStorage('bgImage', 1, localStorage)

/**
 * 切换背景
 */
const toggleBackImage = () => {
  if (bgImage.value >= 4) {
    bgImage.value = 1
  } else {
    bgImage.value++
  }
}
</script>

<template>
  <button rounded p-2 hover="bg-active" @click="toggleBackImage">
    <div i-humbleicons:exchange-vertical text-2xl />
  </button>
</template>
