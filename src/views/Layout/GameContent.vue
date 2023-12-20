<script lang="ts" setup>
import GameMain from '@/views/Game/GameMain.vue'
import { useGlobalState } from '@/store'
import { getAssetsFile } from '@/utils'

const state = useGlobalState()
</script>

<template>
  <div w-full h-full flex-center bg-center bg-cover bg-no-repeat
    :style="{ backgroundImage: `url(${getAssetsFile(`bg-${state.bgImage}.jpg`)})` }">
    <GameMain />
  </div>
</template>
