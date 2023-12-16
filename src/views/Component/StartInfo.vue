<script lang="ts" setup>
import { getRandomNumber } from '@/utils'
import { useGlobalState } from '@/store'
import { getName, initRoleItems, initRounds } from '@/utils/game.util'
const state = useGlobalState()
const showGameInfo = ref(true)
const info: Ref<any> = ref({
  playerRole: getRandomNumber(2) == 0 ? 'emperor' : 'slave',
  rounds: 1
})
const name = computed(() => {
  return getName(info.value.playerRole)
})
// 随机抽取角色 并初始化轮次
initRounds(Math.floor((Math.random() * 10 * 20) % 2) == 0 ? 'emperor' : 'slave', 1)
info.value = state.value;
onMounted(() => {
  reshow();
})
// 暴露出去重现方法
const reshow = () => {
  showGameInfo.value = true
  setTimeout(() => {
    showGameInfo.value = false
  }, 3000)
}
defineExpose({
  reshow
});
</script>

<template>
  <div v-if="showGameInfo" flex-center flex-col h-screen w-screen relative font-size-40px bg-gray:50>
    <div w-160px h-56px flex-center rd-8px gap-5>
      第 <span text-green> {{ info?.rounds }} </span> 局
    </div>
    <div w-240px h-56px flex-center rd-8px>
      角色 ： <span text-red>{{ name }}</span>
    </div>
  </div>
</template>
