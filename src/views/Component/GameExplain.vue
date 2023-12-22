<script lang="ts" setup>
const emits = defineEmits(["close"]);
const explainText = [
  "游戏共分为两种角色，皇帝和奴隶，每个角色拥有5张牌",
  "皇帝方：持1张皇帝牌（Emperor），4张市民牌（Citizen）",
  "奴隶方：持1张奴隶牌（Slave），4张市民牌（Citizen）",
  "游戏开始时随机分配角色，之后每一局角色轮换，共进行21局",
  "玩家选择一张牌后，点击出牌，进行比较",
  "皇帝赢市民，市民赢奴隶，奴隶赢皇帝",
  "市民对市民互相抵消，各自弃牌进入下一轮，抵消牌不再交还各方",
  "皇帝或奴隶被杀，游戏宣告结束，被杀方告负",
  "赢则积1分，数则积0分，先赢到11分则游戏结束",
];
</script>

<template>
  <div box-border w-full h-full flex-center>
    <div p-4 box-border flex="~ col items-center gap-8" bg-Mask border-rd>
      <h3>游戏说明</h3>
      <div flex="~ col gap-2">
        <p font-size-7 v-for="text in explainText" :key="text">
          {{ text }}
        </p>
      </div>
      <button m-l-a p-2 font-size-8 border-rd border-none t-a-2 cursor-pointer l-s-1 flex="~ row items-center"
        @click="emits('close')">
        <div class="i-material-symbols:arrow-back-rounded icon"></div>
        <span>Back</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
button:hover {
  box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
  transform: translateY(-2px);
}
</style>
