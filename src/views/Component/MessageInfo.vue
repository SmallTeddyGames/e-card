<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string
    infoList: string[]
  }>(),
  {
    title: () => '',
    infoList: () => []
  }
)

const emits = defineEmits(["close"]);
</script>

<template>
  <div box-border w-full h-full flex-center p-4>
    <div p-4 sm:p-6 box-border flex="~ col items-center gap-4 sm:gap-6" rounded-2xl
      class="w-full max-w-90vw sm:max-w-600px"
      style="background: rgba(255,255,255,0.98); border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 20px 60px rgba(0,0,0,0.12);">
      <h3 class="gold-text text-2xl sm:text-3xl font-black">{{ title }}</h3>
      <div flex="~ col gap-3" class="max-h-60vh overflow-y-auto w-full">
        <p font-size-4 sm:font-size-5 text-gray-700 v-for="(text, idx) in infoList" :key="idx"
          :class="{ 'text-center': title === '制作人员' || title === 'Producer List' || title === 'ケジュール制作者' || title === '기산자' }"
          class="leading-relaxed">
          {{ text }}
        </p>
      </div>
      <button m-l-a p-2 sm:p-3 font-size-6 sm:font-size-7 border-rd-8px border-none t-a-2 cursor-pointer l-s-1 flex="~ row items-center gap-2"
        class="gold-text font-bold hover:scale-105 transition-all duration-300"
        style="background: rgba(0,113,227,0.08); border: 1px solid rgba(0,113,227,0.2);"
        @click="emits('close')">
        <div class="i-material-symbols:arrow-back-rounded icon text-lg sm:text-xl"></div>
        <span>Back</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
button:hover {
  box-shadow: 0 4px 16px rgba(0, 113, 227, 0.2);
  transform: translateY(-2px);
}
</style>
