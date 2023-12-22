<script lang="ts" setup>
const emits = defineEmits(["close"]);
</script>

<template>
  <div class="game-explain" w-full h-full flex-center>
    <div class="card" flex="~ col items-center gap-10" bg-color>
      <h3>游戏说明</h3>
      <div flex="~ col">
        <p>游戏共分为两种角色，皇帝和奴隶，每个角色拥有5张牌</p>
        <p>皇帝方：持1张皇帝牌（Emperor），4张市民牌（Citizen）</p>
        <p>奴隶方：持1张奴隶牌（Slave），4张市民牌（Citizen）</p>
        <p>游戏开始时随机分配角色，之后每一局角色轮换，共进行21局</p>
        <p>玩家选择一张牌后，点击check出牌，进行比较</p>
        <p>皇帝赢市民，市民赢奴隶，奴隶赢皇帝</p>
        <p>市民对市民互相抵消，各自弃牌进入下一轮，抵消牌不再交还各方</p>
        <p>皇帝或奴隶被杀，游戏宣告结束，被杀方告负，</p>
        <p>赢则积1分，数则积0分，先赢到11分则游戏结束</p>
      </div>
      <button class="btn" @click="emits('close')">
        <div class="i-material-symbols:arrow-back-rounded icon"></div>
        <span>Back</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
/* 字体太大了，屏幕显示不完全，修改 */
.game-explain {
  box-sizing: border-box;
}

.card {
  padding: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  opacity: 0.8;
}

.card p {
  font-size: 2rem;
  line-height: 3rem;
  padding: 0 15px;
}

.btn {
  font-size: 2rem;
  padding: 0 20px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 3px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
}

.btn:hover {
  box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
  transform: translateY(-2px);
}
</style>
