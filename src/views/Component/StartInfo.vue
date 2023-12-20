<script lang='ts' setup>
import Card from '@/views/Component/Card.vue'
import { getRandomNumber } from '@/utils'
import { useGlobalState } from '@/store'
import { getName, initRounds } from '@/utils/game.util'
import { GroupEn, GameStatus } from '@/views/Type'

const state = useGlobalState()
const showGameInfo = ref(false);
const show = ref(true);
const maxRounds = 21
const info: Ref<{ playerRole: GroupEn; rounds: number }> = ref({
  playerRole: getRandomNumber(2) == 0 ? 'emperor' : 'slave',
  rounds: 1
})
// 角色名称
const name = computed(() => getName(info.value.playerRole))

// 随机抽取角色 并初始化轮次
initRounds(Math.floor((Math.random() * 10 * 20) % 2) == 0 ? 'emperor' : 'slave', 1)
info.value = state.value;

/**
 * 暴露出去重现方法
 */
const reshow = (): void => {
  show.value = true;
  if (info.value.rounds <= maxRounds && info.value.rounds > 1) {
    setTimeout(() => {
      show.value = false;
    }, 2000);
  }
}

/**
 * 游戏菜单控制器
 */
const menuController = () => {
  startGame()
}

/**
 * 游戏开始
 */
const startGame = (): void => {
  showGameInfo.value = true
  state.value.gameState = 'start'
  setTimeout(() => {
    show.value = false;
    if (info.value.rounds > maxRounds) {
      showGameInfo.value = false;
    }
  }, 2000);
}

/**
 * 重新开始
 */
const restartGame = () => {
  showGameInfo.value = false;
  show.value = true;
  state.value.rounds = 1;
  state.value.gameState = 'init';
  initRounds(info.value.playerRole, info.value.rounds);
  info.value = state.value;
}

/**
 * 开始按钮
 * @param rounds 轮次
 */
const startLabel = (): string => {
  let label = '开始';
  if (state.value.gameState === 'pause') {
    label = '继续'
  }
  return label;
}

watch(
  () => state.value.gameState,
  (state: GameStatus) => {
    showGameInfo.value = state === 'start';
    if (state === 'start') {
      startGame()
    }
    if (state === 'pause') {
      reshow()
    }
  },
  { immediate: true }
)

defineExpose({
  reshow
});
</script>

<template>
  <div v-if="show" flex-center flex-col h-full w-screen relative font-size-40px bg-gray:50>
    <div v-if="showGameInfo" flex="~ col items-center gap-10">
      <div w-160px h-56px flex-center rd-8px gap-5>
        第 <span text-green> {{ info?.rounds }} </span> 局
      </div>
      <div w-240px h-56px flex-center rd-8px>
        角色 ： <span text-red>{{ name }}</span>
      </div>
    </div>
    <div v-else flex-col flex-center gap-10>
      <button @click="startGame">{{ startLabel() }}</button>
      <button @click="restartGame">重新开始</button>

      <div flex-center gap-10>
        <Card :card-info="{ role: 'emperor', img: 'emperor.jpg' }" is-animation />
        <Card :card-info="{ role: 'citizen', img: 'citizen.jpg' }" is-animation />
        <Card :card-info="{ role: 'slave', img: 'slave.jpg' }" is-animation />
      </div>
    </div>
  </div>
</template>

