<script lang="ts" setup>
import { useGlobalState } from '@/store'

const state = useGlobalState()

/**
 * 切换游戏信息
 */
const toggle = (): void => {
  state.value.isShowGameInfo = !state.value.isShowGameInfo
}

</script>

<template>
  <button v-show="state.gameState === 'start'" rounded p-2 hover="bg-active" @click="toggle">
    <div
      :class="{ 'i-material-symbols:right-panel-close-rounded': state.isShowGameInfo, 'i-material-symbols:right-panel-open-rounded': !state.isShowGameInfo }"
      text-2xl />
  </button>
</template>
