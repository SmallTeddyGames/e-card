<script lang='ts' setup>
import Card from '@/views/Component/Card.vue'
import GameExplain from '@/views/Component/GameExplain.vue'
import ProducerList from '@/views/Component/ProducerList.vue'
import { getRandomNumber } from '@/utils'
import { initRounds } from '@/utils/game.util'
import { GroupEn, GameStatus } from '@/views/Type'

const { t } = useI18n()
const state = useGlobalState()
const showGameInfo = ref(false);
const show = ref(true);
const maxRounds = 21
const info: Ref<{ playerRole: GroupEn; rounds: number }> = ref({
  playerRole: getRandomNumber(2) == 0 ? 'emperor' : 'slave',
  rounds: 1
})
// 角色名称
const name = computed(() => info.value.playerRole)

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
      if (['win', 'lose'].includes(state.value.gameState)) {
        return show.value = true;
      }
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
  if (['win', 'lose'].includes(state.value.gameState)) {
    return;
  }
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
 * 开始按钮文字
 * @param rounds 轮次
 */
const startLabel = computed(() => {
  let label;
  switch (state.value.gameState) {
    case 'pause': label = t('menu.continue'); break
    case 'win': label = t('menu.win'); break
    case 'lose': label = t('menu.lose'); break
    default: label = t('menu.start');
  }
  return label;
})

// 游戏说明
const showGameExplain = ref(false)
// 游戏制作人名单
const showGameProducer = ref(false)

/**
 * 显示游戏说明
 */
const openGameExplain = () => {
  show.value = false
  showGameExplain.value = true
}

/**
 * 隐藏游戏说明
 */
const closeGameExplain = () => {
  show.value = true
  showGameExplain.value = false
}

/**
 * 显示游戏制作人名单
 */
const openGameProducer = () => {
  show.value = false
  showGameProducer.value = true
}

/**
 * 隐藏游戏制作人名单
 */
const closeProducerList = () => {
  show.value = true
  showGameProducer.value = false
}

watch(
  () => state.value.gameState,
  (gameState: GameStatus) => {
    if (gameState === 'start') {
      startGame()
    }
    if (['pause', 'win', 'lose'].includes(gameState)) {
      show.value = true;
      showGameInfo.value = false
    }
  },
  { immediate: true }
)

defineExpose({
  reshow,
  show
});
</script>

<template>
  <div v-if="show" flex-center flex-col h-full w-screen relative font-size-40px bg-gray:50>
    <div v-if="showGameInfo" flex="~ col items-center gap-10">
      <div w-500px h-56px flex-center rd-8px gap-5>
        {{ $t('game.no') }} <span text-green> {{ info?.rounds }} </span> {{ $t('game.round') }}
      </div>
      <div w-500px h-56px flex-center rd-8px>
        {{ $t('game.role') }} ： <span text-red>{{ t(`game.${name}`) }}</span>
      </div>
    </div>
    <div v-else flex-col flex-center gap-5>
      <button @click="startGame">{{ startLabel }}</button>
      <button v-if="state.gameState !== 'init'" @click="restartGame">{{ t('menu.reStart') }}</button>
      <button @click="openGameExplain">{{ t('menu.explain') }}</button>
      <button @click="openGameProducer">{{ t('menu.producer') }}</button>

      <div flex-center gap-10>
        <Card :card-info="{ role: 'emperor', img: 'emperor.jpg' }" is-animation />
        <Card :card-info="{ role: 'citizen', img: 'citizen.jpg' }" is-animation />
        <Card :card-info="{ role: 'slave', img: 'slave.jpg' }" is-animation />
      </div>
    </div>
  </div>
  <div v-if="showGameExplain" flex-center flex-col h-full w-screen relative font-size-40px bg-gray:50>
    <GameExplain @close="closeGameExplain" />
  </div>
  <div v-if="showGameProducer" flex-center flex-col h-full w-screen relative font-size-40px bg-gray:50>
    <ProducerList @close="closeProducerList" />
  </div>
</template>

