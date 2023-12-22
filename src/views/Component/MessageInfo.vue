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
  <div box-border w-full h-full flex-center>
    <div p-4 box-border flex="~ col items-center gap-8" bg-Mask border-rd-12px style="min-width: 600px">
      <h3>{{ title }}</h3>
      <div flex="~ col gap-2">
        <p font-size-7 v-for="text in infoList" :key="text" :class="{ 'text-center': title === '制作人员' }">
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
