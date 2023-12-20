<script lang="ts" setup>
import { useGlobalState } from '@/store'

const state = useGlobalState()

/**
 * 切换背景
 */
const toggleBackImage = (): void => {
  console.log(state.value.bgImage)
  if (state.value.bgImage >= 4) {
    state.value.bgImage = 1
  } else {
    state.value.bgImage++
  }
}
</script>

<template>
  <button rounded p-2 hover="bg-active" @click="toggleBackImage">
    <div i-humbleicons:exchange-vertical text-2xl />
  </button>
</template>
