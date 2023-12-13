<script lang='ts' setup>
import GameInformation from '../Component/GameInformation.vue';
</script>

<template>
  <div h-full grid="~ rows-4">
      <div h-full w-screen bg-red grid="~ cols-5">
        <!-- <div w-full bg-gray:80 flex-center>记牌器区域</div> -->
        <div col-span-3 w-full bg-gray:50 flex-center>手牌区域</div>
        <div col-span-2 w-full bg-gray:80 flex-center>局数信息</div>
      </div>
      <div h-full w-screen bg-blue grid="~ cols-3">
        <div w-full bg-gray:80 flex-center>空</div>
        <div w-full bg-gray:50 flex-center>检查局域</div>
        <div w-full bg-gray:80 flex-center>弃牌区域</div>
      </div>
      <div h-full w-screen bg-yellow grid="~ cols-3">
        <div w-full bg-gray:80 flex-center>空</div>
        <div w-full bg-gray:50 flex-center>检查局域</div>
        <div w-full bg-gray:80 flex-center>弃牌区域</div>
      </div>
      <div h-full w-screen bg-green grid="~ cols-5">
        <!-- <div w-full bg-gray:80 flex-center>记牌器区域</div> -->
        <div col-span-3 w-full bg-gray:50 flex-center>手牌区域</div>
        <div col-span-2 w-full bg-gray:80 flex-center>
          <GameInformation />
        </div>
      </div>
    </div>
</template>
