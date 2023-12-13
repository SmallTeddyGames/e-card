<script lang='ts' setup>
import { getAssetsFile } from '../../utils/index'

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
</script>

<template>
  <div grid="~ cols-5 gap-5">
    <img cursor-pointer w-120px v-for="img in cardItems" :src="getAssetsFile(`${img}.jpg`)">
  </div>
</template>
