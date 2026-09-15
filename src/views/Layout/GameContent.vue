<script lang="ts" setup>
import GameMain from '@/views/Game/GameMain.vue'
import { getAssetsFile } from '@/utils'

const state = useGlobalState()
</script>

<template>
  <div class="game-content"
    :style="{ backgroundImage: `url(${getAssetsFile(`bg-${state.bgImage}.jpg`)})` }">
    <GameMain />
  </div>
</template>
