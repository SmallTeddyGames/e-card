<script lang='ts' setup>
import GameInformation from '../Component/GameInformation.vue';
import Card from '../Component/Card.vue'
import StartInfo from '../Component/StartInfo.vue'
</script>

<template>
  <StartInfo />
  <div h-full grid="~ rows-4">
      <div h-full w-screen grid="~ cols-5">
        <!-- <div w-full bg-gray:80 flex-center>记牌器区域</div> -->
        <div col-span-3 w-full bg-gray:50 flex-center>
          <Card role="slave" />
        </div>
        <div col-span-2 w-full bg-gray:80 flex-center>
          <GameInformation />
        </div>
      </div>
      <div h-full w-screen grid="~ cols-3">
        <div w-full bg-gray:50 flex-center></div>
        <div w-full bg-gray:50 flex-center>检查局域</div>
        <div w-full bg-gray:80 flex-center>弃牌区域</div>
      </div>
      <div h-full w-screen grid="~ cols-3">
        <div w-full bg-gray:50 flex-center></div>
        <div w-full bg-gray:50 flex-center>检查局域</div>
        <div w-full bg-gray:80 flex-center>弃牌区域</div>
      </div>
      <div h-full w-screen grid="~ cols-5">
        <!-- <div w-full bg-gray:80 flex-center>记牌器区域</div> -->
        <div col-span-3 w-full bg-gray:50 flex-center>
          <Card role="emperor" />
        </div>
        <div col-span-2 w-full bg-gray:80 flex-center>
          <GameInformation />
        </div>
      </div>
    </div>
</template>
