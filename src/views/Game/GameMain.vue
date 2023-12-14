<script lang='ts' setup>
import GameInformation from '../Component/GameInformation.vue';
import PlayerCard from '../Component/PlayerCard.vue'
import StartInfo from '../Component/StartInfo.vue'
import CheckCard from '../Component/CheckCard.vue'
import { useStorage } from '@vueuse/core'

const isShowGameInfo = useStorage('showGameInfo', true, localStorage)
</script>

<template>
  <StartInfo />
  <div h-full w-screen grid="~" :class="isShowGameInfo ? 'grid-cols-5' : 'grid-cols-1'">
    <transition name="game-center" mode="out-in">
      <div grid="~ rows-4" col-span-3 h-full w-full>
        <div w-full bg-gray:50 flex-center>
          <PlayerCard role="slave" />
        </div>
        <div bg-gray:50 flex-center>
          <CheckCard :card-info="{ role: 'slave', img: 'slave.jpg' }" />
        </div>
        <div w-full bg-gray:50 flex-center>
          <CheckCard :card-info="{ role: 'citizen', img: 'citizen.jpg' }" />
        </div>
        <div w-full bg-gray:50 flex-center>
          <PlayerCard role="emperor" />
        </div>
      </div>
    </transition>

    <transition name="game-info" mode="out-in">
      <div v-show="isShowGameInfo" grid="~ rows-4" col-span-2 h-full w-full>
        <div h-full w-full bg-gray:80 flex-center>
          <GameInformation />
        </div>
        <div w-full bg-gray:80 flex-center>弃牌区域</div>
        <div w-full bg-gray:80 flex-center>弃牌区域</div>
        <div h-full w-full bg-gray:80 flex-center>
          <GameInformation />
        </div>
      </div>
    </transition>
  </div>
</template>
