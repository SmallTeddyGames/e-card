<script lang='ts' setup>
import { getAssetsFile , moveDom} from '../../utils/index'
import { nextTick } from 'vue' 
import type { CardItem } from '../Type/cardType'

const props = defineProps({
  role: {
    type: String,
    default: 'emperor',
  }
})

const emperorCardItems: Ref<CardItem[]> = ref([
  { role: 'emperor', img: 'emperor.jpg', isClick: false, sort: 1, group:'emperor', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 2, group:'emperor', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 3, group:'emperor', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 4, group:'emperor', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 5, group:'emperor', }
])
const slaveCardItems: Ref<CardItem[]>  = ref([
  { role: 'slave',   img: 'slave.jpg',   isClick: false, sort: 1, group:'slave', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 2, group:'slave', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 3, group:'slave', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 4, group:'slave', },
  { role: 'citizen', img: 'citizen.jpg', isClick: false, sort: 5, group:'slave', }
])

const cardItems = computed(() => {
  return props.role === 'emperor' ? emperorCardItems.value : slaveCardItems.value
})

const handleCardClick = (cardInfo: CardItem) => {
  cardItems.value.map(v => v.isClick = false)
  cardInfo.isClick = true
}
const disopseCard = ( group:String, cardInfos: String) => { 
    let roleClass = document.querySelector('.'+group+'.'+cardInfos)   
    // roleClass.classList.add('cardDisposeArea')  
    moveDom(roleClass)
} 

</script>

<template>
  <div grid="~ cols-5 gap-5">
    <div
      w-120px
      relative
      cursor-pointer
      transition-all-500
      v-for="(cardItem,index) in cardItems"
      :class="[cardItem.isClick ? 'top--20px' : 'top-0' ,cardItem.group , cardItem.role+index]" 
      
    >
      <img 
        :alt="cardItem.role"
        :src="getAssetsFile(cardItem.img)" 
        @click="handleCardClick(cardItem)"
      />
      <div text-center @click="disopseCard(cardItem.group , cardItem.role+index)">
        弃置
      </div>
    </div>
    
    
  </div>
</template>
<style scoped> 
</style>
