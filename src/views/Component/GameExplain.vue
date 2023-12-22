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
        <svg
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"
          ></path>
        </svg>
        <span>Back</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
/* 字体太大了，屏幕显示不完全，修改 */
.game-explain {
  padding: 20px;
  box-sizing: border-box;
}
p {
  font-size: 2rem;
  line-height: 3rem;
}
.card {
  padding: 15px;
  border-radius: 10px;
  box-sizing: border-box;
  opacity: 0.8;
}
.btn {
  font-size: 2rem;
  padding: 0 20px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  letter-spacing: 1px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
}
.btn > svg {
  margin-right: 5px;
  margin-left: 5px;
  font-size: 20px;
  transition: all 0.4s ease-in;
}

.btn:hover > svg {
  font-size: 1.2em;
  transform: translateX(-5px);
}

.btn:hover {
  box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
  transform: translateY(-2px);
}
</style>
