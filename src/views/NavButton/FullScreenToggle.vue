<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <button rounded p-2 hover="bg-active" @click="toggle">
    <div :class="{ 'i-gridicons:fullscreen-exit': isFullscreen, 'i-gridicons:fullscreen': !isFullscreen }" text-2xl />
  </button>
</template>
