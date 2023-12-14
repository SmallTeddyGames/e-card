<script lang="ts" setup>
import { useStorage } from '@vueuse/core'

const isShowGameInfo = useStorage('showGameInfo', true, localStorage)
const toggle = () => isShowGameInfo.value = !isShowGameInfo.value
</script>

<template>
  <button
    rounded p-2
    hover="bg-active"
    @click="toggle"
  >
    <div i-material-symbols:right-panel-open-rounded text-2xl />
  </button>
</template>
