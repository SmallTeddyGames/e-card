<script lang='ts' setup>
import { getRandomNumber } from '@/utils'
import { useGlobalState } from '@/store'
import { getName, initRoleItems, initRounds } from '@/utils/game.util'
const state = useGlobalState()
const showGameInfo = ref(false);
const show = ref(true);
const maxRounds = ref(21)
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
  show.value = true;
  if (info.value.rounds <= maxRounds.value && info.value.rounds > 1) {
    setTimeout(() => {
      show.value = false;
    }, 2000);
  }
}
// 游戏菜单控制器
const menuController = () => {
  startGame()
}
//游戏开始
const startGame = () => {
  showGameInfo.value = true
  setTimeout(() => {
    show.value = false;
    if (info.value.rounds > maxRounds.value) {
      showGameInfo.value = false;
    }
  }, 2000);
}
const startLabel = (rounds: number) => {
  let label = '开始';
  if (rounds > 1 && rounds <= maxRounds.value) {
    label = '继续'
  }
  return label;
}
defineExpose({
  reshow
});
</script>

<template>
  <div v-if="show" flex-center flex-col h-full w-screen relative font-size-40px bg-gray:50>
    <div v-if="showGameInfo">
      <div w-160px h-56px flex-center rd-8px gap-5>
        第 <span text-green> {{ info?.rounds }} </span> 局
      </div>
      <div w-240px h-56px flex-center rd-8px>
        角色 ： <span text-red>{{ name }}</span>
      </div>
    </div>
    <div v-else flex-col flex-center gap-10>
      <button @click="startGame">{{ startLabel(info.rounds) }}</button>

      <div flex-center gap-10>
        <div class="card-emperor">
          <div class="front"></div>
          <div class="back"></div>
        </div>
        <div class="card-citizen">
          <div class="front"></div>
          <div class="back"></div>
        </div>
        <div class="card-slave">
          <div class="front"></div>
          <div class="back"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-emperor,
.card-citizen,
.card-slave {
  --uno: 'card-size';
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  animation: card-rotate 3s infinite;
}

@keyframes card-rotate {
  0% {
    transform: rotateY(0);
  }

  50% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(0);
  }
}

.card-emperor .front,
.card-emperor .back,
.card-citizen .front,
.card-citizen .back,
.card-slave .front,
.card-slave .back {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  backface-visibility: hidden;
}

.card-emperor .front {
  background-image: url('../../assets/emperor.jpg');
}

.card-citizen .front {
  background-image: url('../../assets/citizen.jpg');
}

.card-slave .front {
  background-image: url('../../assets/slave.jpg');
}

.card-emperor .back,
.card-citizen .back,
.card-slave .back {
  background-image: url('../../assets/card-bg.jpg');
  transform: rotateY(180deg);
}
</style>
