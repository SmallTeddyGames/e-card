<script lang="ts" setup>
const emits = defineEmits(["close"]);
const producerText = [
  "SmallTeddy"
];
</script>

<template>
  <div box-border w-full h-full flex-center>
    <div w-600px p-4 box-border flex="~ col items-center gap-8" bg-Mask border-rd>
      <h3>制作人员</h3>
      <div flex="~ col gap-2">
        <p font-size-7 v-for="text in producerText" :key="text">
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
