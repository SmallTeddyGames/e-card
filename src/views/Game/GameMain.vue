<script lang='ts' setup>
import GameInformation from '../Component/GameInformation.vue';
import ComputedCard from '../Component/ComputedCard.vue'
import PlayerCard from '../Component/PlayerCard.vue'
import StartInfo from '../Component/StartInfo.vue'
import CheckCard from '../Component/CheckCard.vue'
import DropCard from '../Component/DropCard.vue';
import { getRandomNumber } from '../../utils'
import { useStorage } from '@vueuse/core'
import type { CardItem } from '../Type/cardType'

const { proxy } = getCurrentInstance() as any
const isShowGameInfo = useStorage('showGameInfo', true, localStorage)

const role: Ref<'emperor' | 'slave'> = ref('emperor')

const emperorCardItems: Ref<CardItem[]> = ref([
  { role: 'emperor', img: 'emperor.jpg', isClick: false, sort: 1, group: 'emperor', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 2, group: 'emperor', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 3, group: 'emperor', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 4, group: 'emperor', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 5, group: 'emperor', }
])
const slaveCardItems: Ref<CardItem[]> = ref([
  { role: 'slave', img: 'slave.jpg', isClick: false, sort: 1, group: 'slave', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 2, group: 'slave', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 3, group: 'slave', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 4, group: 'slave', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 5, group: 'slave', }
])

const playerCardInfo: Ref<CardItem> | null = ref()
const computerCardInfo: Ref<CardItem> | null = ref()
const playerCardCheck = (cardInfo: CardItem) => {
  playerCardInfo.value = cardInfo
  slaveCardItems.value = slaveCardItems.value.filter(card => card.sort !== cardInfo.sort)

  computerCardInfo.value = emperorCardItems.value.find(card => card.sort === getRandomNumber(emperorCardItems.value.length))
  emperorCardItems.value = emperorCardItems.value.filter(card => card.sort !== computerCardInfo.value.sort)
}
</script>

<template>
  <StartInfo />
  <div h-full w-screen grid="~" :class="[isShowGameInfo ? 'grid-cols-5' : 'grid-cols-1']">
    <transition name="game-center" mode="out-in">
      <div grid="~ rows-4" col-span-3 h-full w-full>
        <div w-full bg-gray:50 flex-center>
          <ComputedCard ref="computerCardRef" role="slave" :cardItems="slaveCardItems" />
        </div>
        <div bg-gray:50 flex-center>
          <CheckCard :card-info="computerCardInfo" />
        </div>
        <div w-full bg-gray:50 flex-center>
          <CheckCard :card-info="playerCardInfo" />
        </div>
        <div w-full bg-gray:50 flex-center>
          <PlayerCard ref="playerCardRef" role="emperor" :cardItems="emperorCardItems" @card-check="playerCardCheck" />
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
          <DropCard :cardItems="[
            { role: 'citizen', img: 'citizen.jpg' },
            { role: 'citizen', img: 'citizen.jpg' }
          ]" />
        </div>
        <div h-full w-full bg-gray:80 flex-center>
          <GameInformation />
        </div>
      </div>
    </transition>
  </div>
</template>
