<script lang='ts' setup>
const props = defineProps({
  role: {
    type: String,
    default: 'emperor',
  }
})

const emperorCardItems = ref([ 'emperor', 'citizen', 'citizen', 'citizen', 'citizen'])
const slaveCardItems = ref([ 'slave', 'citizen', 'citizen', 'citizen', 'citizen'])

const cardItems = computed(() => {
  return props.role === 'emperor' ? emperorCardItems.value : slaveCardItems.value
})

const getImgUrl = (img: string) => {
  // 待修复
  return new URL(`../../assets/${img}.png`, import.meta.url).href
}
</script>

<template>
  <div grid="~ cols-5 gap-5">
    <img cursor-pointer w-120px v-for="img in cardItems" :src="getImgUrl(img)">
  </div>
</template>
