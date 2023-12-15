<script lang="ts" setup>
import GameInformation from '../Component/GameInformation.vue'
import ComputedCard from '../Component/ComputedCard.vue'
import PlayerCard from '../Component/PlayerCard.vue'
import StartInfo from '../Component/StartInfo.vue'
import CheckCard from '../Component/CheckCard.vue'
import DropCard from '../Component/DropCard.vue';
import { getRandomNumber, deepClone } from '../../utils'
import { useStorage } from '@vueuse/core'
import type { CardItem } from '../Type/cardType'
import { useGlobalState } from '../../store';

const { proxy } = getCurrentInstance() as any
const isShowGameInfo = useStorage('showGameInfo', true, localStorage)
// 全局信息变量
const state = useGlobalState()

const playerRole = computed(() => {
  return state.value.playerRole
})

const playerCardItems = computed((): CardItem[] => state.value.playerCardItems)

const computerCardItems = computed(
  (): CardItem[] => state.value.computerCardItems
)

// 玩家当前打出的卡片信息
const playerCardInfo: Ref<CardItem> | null = ref()
// 电脑当前打出的卡片信息
const computerCardInfo: Ref<CardItem> | null = ref()
/**
 * 进行检查
 * 检查规则是去除玩家和电脑选中的卡牌
 * @param cardInfo
 */
const playerCardCheck = (cardInfo: CardItem) => {
  // 玩家操作
  const copyPlayerCardInfo = deepClone(cardInfo)
  playerCardInfo.value = copyPlayerCardInfo
  state.value.playerCardItems = state.value.playerCardItems.filter(card => card.sort !== copyPlayerCardInfo.sort);
  //todo 算法待定 电脑操作 
  const sort = getRandomNumber(state.value.computerCardItems.length);
  const copyComputerCardInfo = deepClone(state.value.computerCardItems[sort])
  computerCardInfo.value = copyComputerCardInfo;
  console.log("随机到",sort,computerCardInfo.value);

  state.value.computerCardItems = state.value.computerCardItems.filter(card => card.sort !== copyComputerCardInfo.sort)
}
</script>

<template>
  <StartInfo />
  <div
    h-full
    w-screen
    grid="~"
    :class="[isShowGameInfo ? 'grid-cols-5' : 'grid-cols-1']"
  >
    <transition name="game-center" mode="out-in">
      <div grid="~ rows-4" col-span-3 h-full w-full>
        <div w-full bg-gray:50 flex-center>
          <ComputedCard
            ref="computerCardRef"
            role="slave"
            :cardItems="computerCardItems"
          />
        </div>
        <div bg-gray:50 flex-center>
          <CheckCard :card-info="computerCardInfo" />
        </div>
        <div w-full bg-gray:50 flex-center>
          <CheckCard :card-info="playerCardInfo" />
        </div>
        <div w-full bg-gray:50 flex-center>
          <PlayerCard
            ref="playerCardRef"
            role="emperor"
            :cardItems="playerCardItems"
            @card-check="playerCardCheck"
          />
        </div>
      </div>
    </transition>

    <transition name="game-info" mode="out-in">
      <div v-show="isShowGameInfo" grid="~ rows-4" col-span-2 h-full w-full>
        <div h-full w-full bg-gray:80 flex-center>
          <GameInformation />
        </div>
        <div w-full bg-gray:80 flex-center>
          <DropCard />
        </div>
        <div w-full bg-gray:80 flex-center>
          <DropCard
            :cardItems="[
              { role: 'citizen', img: 'citizen.jpg' },
              { role: 'citizen', img: 'citizen.jpg' }
            ]"
          />
        </div>
        <div h-full w-full bg-gray:80 flex-center>
          <GameInformation />
        </div>
      </div>
    </transition>
  </div>
</template>
