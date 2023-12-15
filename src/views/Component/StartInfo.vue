<script lang="ts" setup>
import { getRandomNumber } from '@/utils'
import { useGlobalState } from '@/store'
import { getName, initRoleItems } from '@/utils/game.util'
const state = useGlobalState()
const showGameInfo = ref(true)
const info: Ref<any> = ref({
  playerRole: getRandomNumber(2) == 0 ? 'emperor' : 'slave',
  rounds: 1
})
const name = computed(() => {
  return getName(info.value.playerRole)
})
// 初始化 数据
// 随机抽取角色 并初始化轮次
info.value = Object.assign(state.value, {
  playerRole:
    Math.floor((Math.random() * 10 * 20) % 2) == 0 ? 'emperor' : 'slave',
  rounds: 1
})
// 初始化手牌
state.value.playerCardItems = initRoleItems(info.value.playerRole);
state.value.computerCardItems = initRoleItems(info.value.playerRole == "emperor" ? "slave" : "emperor");

onMounted(() => {
  setTimeout(() => {
    showGameInfo.value = false
  }, 3000)
})
</script>

<template>
  <div
    v-if="showGameInfo"
    flex-center
    flex-col
    h-screen
    w-screen
    relative
    font-size-40px
    bg-gray:50
  >
    <div w-160px h-56px flex-center rd-8px gap-5>
      第 <span text-green> {{ info?.rounds }} </span> 局
    </div>
    <div w-240px h-56px flex-center rd-8px>
      角色 ： <span text-red>{{ name }}</span>
    </div>
  </div>
</template>
