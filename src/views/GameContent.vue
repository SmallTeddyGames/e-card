<script lang='ts' setup>
import { useStorage } from '@vueuse/core'

const bgImage = useStorage('bgImage', 1, localStorage) || ref(1)
</script>

<template>
  <div w-full h-full flex-center bg-center bg-cover bg-no-repeat :style="{backgroundImage: `url(src/assets/bg-${bgImage}.jpg)`}">
    <div h-full grid="~ rows-3">
      <div h-full w-screen bg-red grid="~ cols-3">
        <div w-full bg-gray:80 flex-center>记牌器区域</div>
        <div w-full bg-gray:50 flex-center>手牌区域</div>
        <div w-full bg-gray:80 flex-center>局数信息</div>
      </div>
      <div h-full w-screen bg-blue grid="~ cols-3">
        <div w-full bg-gray:80 flex-center>空</div>
        <div w-full bg-gray:50 flex-center>检查局域</div>
        <div w-full bg-gray:80 flex-center>弃牌区域</div>
      </div>
      <div h-full w-screen bg-green grid="~ cols-3">
        <div w-full bg-gray:80 flex-center>记牌器区域</div>
        <div w-full bg-gray:50 flex-center>手牌区域</div>
        <div w-full bg-gray:80 flex-center>局数信息</div>
      </div>
    </div>
  </div>
</template>

