<script lang="ts" setup>
const { t } = useI18n()
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
  <div box-border w-full h-full flex-center p-2 sm:p-4>
    <div p-3 sm:p-5 box-border flex="~ col items-center gap-2 sm:gap-3" rounded-lg
      class="w-full max-w-90vw sm:max-w-600px max-h-full"
      style="background: rgba(255,255,255,0.98); border: 1px solid rgba(0,0,0,0.08); box-shadow: 0 20px 60px rgba(0,0,0,0.12);">
      <h3 class="gold-text text-xl sm:text-2xl font-black">{{ title }}</h3>
      <div flex="~ col gap-1.5 sm:gap-2" class="max-h-[60vh] overflow-y-auto w-full">
        <p text-xs sm:text-sm text-gray-700 v-for="(text, idx) in infoList" :key="idx"
          :class="{ 'text-center': title === '制作人员' || title === 'Producer List' || title === 'ケジュール制作者' || title === '기산자' }"
          class="leading-snug">
          {{ text }}
        </p>
      </div>
      <button m-l-a p-1.5 sm:p-2 text-xs sm:text-sm rounded-md border-none cursor-pointer flex="~ row items-center gap-1.5"
        class="gold-text font-bold hover:scale-105 transition-all duration-300"
        style="background: rgba(0,113,227,0.08); border: 1px solid rgba(0,113,227,0.2);"
        @click="emits('close')">
        <div class="i-material-symbols:arrow-back-rounded icon text-base sm:text-lg"></div>
        <span>{{ t('common.back') }}</span>
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
