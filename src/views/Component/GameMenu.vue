<script lang='ts' setup>
import Card from '@/views/Component/Card.vue'
import GameExplain from '@/views/Component/GameExplain.vue'
import ProducerList from '@/views/Component/ProducerList.vue'
import { getRandomNumber, playSound } from '@/utils'
import { initRounds } from '@/utils/game.util'
import { GroupEn, GameStatus, Difficulty } from '@/views/Type'

const { t } = useI18n()
const state = useGlobalState()
const showGameInfo = ref(false);
const show = ref(true);
const maxRounds = 21

// 难度选项
const difficulties: Array<{ key: Difficulty; label: string; color: string; icon: string }> = [
  { key: 'easy', label: 'easy', color: 'from-green-500 to-green-700', icon: '🌱' },
  { key: 'middle', label: 'middle', color: 'from-blue-500 to-blue-700', icon: '⚔️' },
  { key: 'hard', label: 'hard', color: 'from-orange-500 to-red-600', icon: '🔥' },
  { key: 'hell', label: 'hell', color: 'from-purple-600 to-red-800', icon: '💀' },
]

// 押注选项
const betOptions = [50, 100, 200, 500]
const selectedDifficulty = ref<Difficulty>('middle')
const selectedBet = ref(100)

const info: Ref<{ playerRole: GroupEn; rounds: number }> = ref({
  playerRole: getRandomNumber(2) == 0 ? 'emperor' : 'slave',
  rounds: 1
})
// 角色名称
const name = computed(() => info.value.playerRole)

// 随机抽取角色 并初始化轮次
initRounds(
  Math.floor((Math.random() * 10 * 20) % 2) == 0 ? 'emperor' : 'slave',
  1,
  selectedDifficulty.value,
  selectedBet.value,
  state.value.initialBeans || 1000
)
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
 * 游戏开始
 */
const startGame = (): void => {
  if (['win', 'lose'].includes(state.value.gameState)) {
    return;
  }
  playSound('deal', 0.3)
  showGameInfo.value = true
  state.value.gameState = 'start'
  state.value.difficulty = selectedDifficulty.value
  state.value.betAmount = selectedBet.value
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
  state.value.totalWins = 0;
  state.value.totalLosses = 0;
  initRounds(
    info.value.playerRole,
    info.value.rounds,
    selectedDifficulty.value,
    selectedBet.value,
    state.value.initialBeans || 1000
  );
  info.value = state.value;
}

/**
 * 开始按钮文字
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

const openGameExplain = () => {
  show.value = false
  showGameExplain.value = true
}

const closeGameExplain = () => {
  show.value = true
  showGameExplain.value = false
}

const openGameProducer = () => {
  show.value = false
  showGameProducer.value = true
}

const closeProducerList = () => {
  show.value = true
  showGameProducer.value = false
}

// 选择难度
const selectDifficulty = (diff: Difficulty) => {
  selectedDifficulty.value = diff
  playSound('click', 0.2)
}

// 选择押注
const selectBet = (bet: number) => {
  selectedBet.value = bet
  playSound('click', 0.2)
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
  <!-- 主菜单 -->
  <div v-if="show" class="flex flex-col items-center justify-center h-full w-full absolute inset-0 z-20 overflow-hidden"
    style="background: radial-gradient(ellipse at center, #fafafa 0%, #e8e8ed 100%);">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 15" :key="i" class="absolute rounded-full animate-float"
        :style="{
          width: `${Math.random() * 8 + 3}px`,
          height: `${Math.random() * 8 + 3}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: 'rgba(0,113,227,0.25)',
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 3 + 2}s`
        }"
      ></div>
    </div>

    <!-- 对局信息展示 -->
    <div v-if="showGameInfo" class="flex flex-col items-center gap-2 sm:gap-4 animate-scale-in z-10 px-4">
      <div class="px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-md text-sm sm:text-xl font-bold"
        style="background: rgba(255,255,255,0.8); border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 2px 12px rgba(0,0,0,0.06); color: #1d1d1f;">
        {{ $t('game.no') }} <span class="gold-text">{{ info?.rounds }}</span> {{ $t('game.round') }}
      </div>
      <div class="px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-md text-sm sm:text-xl font-bold"
        style="background: rgba(255,255,255,0.8); border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 2px 12px rgba(0,0,0,0.06); color: #1d1d1f;">
        {{ $t('game.role') }}：<span class="text-blue-500">{{ t(`game.${name}`) }}</span>
      </div>
      <div class="text-gray-500 text-xs animate-pulse">{{ t('game.prepare') }}</div>
    </div>

    <!-- 主菜单界面 -->
    <div v-else class="flex flex-col items-center gap-1.5 sm:gap-3 z-10 w-full max-w-90vw px-3 min-h-0">
      <!-- 游戏标题 -->
      <div class="text-center">
        <h1 class="text-3xl sm:text-5xl font-black gold-text mb-1" style="text-shadow: 0 2px 20px rgba(0,113,227,0.2);">
          E-CARD
        </h1>
        <p class="text-gray-500 text-xs sm:text-sm">{{ t('menu.subtitle') }}</p>
      </div>

      <!-- 难度选择 -->
      <div class="w-full max-w-460px">
        <div class="text-gray-600 text-xs font-bold mb-1 text-center">{{ t('menu.difficulty') }}</div>
        <div class="grid grid-cols-4 gap-1 sm:gap-2">
          <button
            v-for="diff in difficulties"
            :key="diff.key"
            class="py-1.5 sm:py-2 px-1 rounded-md font-bold text-xs transition-all duration-300 hover:scale-105 active:scale-95"
            :class="[
              selectedDifficulty === diff.key
                ? `bg-gradient-to-b ${diff.color} ring-2 ring-blue-400 scale-105 text-white`
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
            style="box-shadow: 0 2px 8px rgba(0,0,0,0.06);"
            @click="selectDifficulty(diff.key)"
          >
            <div class="text-sm sm:text-base mb-0.5">{{ diff.icon }}</div>
            <div>{{ t(`difficulty.${diff.label}`) }}</div>
          </button>
        </div>
      </div>

      <!-- 押注选择 -->
      <div class="w-full max-w-460px">
        <div class="text-gray-600 text-xs font-bold mb-1 text-center flex items-center justify-center gap-1.5">
          <span>🫘</span>
          <span>{{ t('menu.betAmount') }}</span>
          <span class="gold-text font-black text-sm sm:text-base">{{ selectedBet }}</span>
        </div>
        <div class="grid grid-cols-4 gap-1 sm:gap-2">
          <button
            v-for="bet in betOptions"
            :key="bet"
            class="py-1.5 sm:py-2 px-1 rounded-md font-bold text-xs transition-all duration-300 hover:scale-105 active:scale-95"
            :class="[
              selectedBet === bet
                ? 'bg-gradient-to-b from-blue-500 to-blue-700 text-white ring-2 ring-blue-400 scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
            style="box-shadow: 0 2px 8px rgba(0,0,0,0.06);"
            @click="selectBet(bet)"
          >
            {{ bet }}
          </button>
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="flex flex-col gap-1.5 sm:gap-2 w-full max-w-280px">
        <button
          class="py-2 sm:py-3 rounded-md font-bold text-sm sm:text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-gold"
          style="background: linear-gradient(135deg, #0071e3, #0051a8);"
          @click="startGame"
        >
          {{ startLabel }}
        </button>
        <button
          v-if="state.gameState !== 'init'"
          class="py-1.5 sm:py-2 rounded-md font-bold text-gray-700 text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95"
          style="background: rgba(255,255,255,0.8); border: 1px solid rgba(0,0,0,0.1);"
          @click="restartGame"
        >
          {{ t('menu.reStart') }}
        </button>
        <div class="flex gap-1.5 sm:gap-2">
          <button
            class="flex-1 py-1.5 sm:py-2 rounded-md font-bold text-gray-700 text-xs transition-all duration-300 hover:scale-105 active:scale-95"
            style="background: rgba(255,255,255,0.8); border: 1px solid rgba(0,0,0,0.1);"
            @click="openGameExplain"
          >
            {{ t('menu.explain') }}
          </button>
          <button
            class="flex-1 py-1.5 sm:py-2 rounded-md font-bold text-gray-700 text-xs transition-all duration-300 hover:scale-105 active:scale-95"
            style="background: rgba(255,255,255,0.8); border: 1px solid rgba(0,0,0,0.1);"
            @click="openGameProducer"
          >
            {{ t('menu.producer') }}
          </button>
        </div>
      </div>

      <!-- 卡牌展示 -->
      <div class="flex items-center gap-3 sm:gap-5 mt-1">
        <div class="animate-float" style="animation-delay: 0s;">
          <Card :card-info="{ role: 'emperor', img: 'emperor.jpg' }" is-animation size="sm" />
        </div>
        <div class="animate-float" style="animation-delay: 0.5s;">
          <Card :card-info="{ role: 'citizen', img: 'citizen.jpg' }" is-animation size="sm" />
        </div>
        <div class="animate-float" style="animation-delay: 1s;">
          <Card :card-info="{ role: 'slave', img: 'slave.jpg' }" is-animation size="sm" />
        </div>
      </div>
    </div>
  </div>

  <!-- 游戏说明 -->
  <div v-if="showGameExplain" class="flex flex-col items-center justify-center h-full w-full absolute inset-0 z-20 overflow-hidden"
    style="background: radial-gradient(ellipse at center, #fafafa 0%, #e8e8ed 100%);">
    <GameExplain @close="closeGameExplain" />
  </div>

  <!-- 制作人名单 -->
  <div v-if="showGameProducer" class="flex flex-col items-center justify-center h-full w-full absolute inset-0 z-20 overflow-hidden"
    style="background: radial-gradient(ellipse at center, #fafafa 0%, #e8e8ed 100%);">
    <ProducerList @close="closeProducerList" />
  </div>
</template>
