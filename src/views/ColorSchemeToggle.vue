<script lang="ts" setup>
import { useColorMode } from '@vueuse/core'
const colorMode = useColorMode()

const toggleMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  console.log(colorMode.value)
}
</script>

<template>
  <button
    rounded p-2
    hover="bg-active"
    @click="toggleMode"
  >
    <div i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone text-2xl />
  </button>
</template>
