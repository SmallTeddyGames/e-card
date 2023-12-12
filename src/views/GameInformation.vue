<script lang='ts' setup>
const emperorItems = [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1]
const  slaveItems = emperorItems.map(item => !!item)

const emperorScore = emperorItems.reduce((a, b) => a + b, 0)
const slaveScore = 21 - emperorScore
</script>

<template>
  <table>
    <tr>
      <td>局数</td>
      <td v-for="i in 21">{{ i }}</td>
      <td>总计</td>
    </tr>
    <tr>
      <td>皇帝</td>
      <td v-for="v in emperorItems">
        <div w-20px h-20px border-rd-10px :class="v ? 'bg-green' : 'bg-red'"></div>
      </td>
      <td>{{ emperorScore }}</td>
    </tr>
    <tr>
      <td>奴隶</td>
      <td v-for="v in slaveItems">
        <div w-20px h-20px border-rd-10px :class="v ? 'bg-red' : 'bg-green'"></div>  
      </td>
      <td>{{ slaveScore }}</td>
    </tr>
  </table>
</template>

<style scoped>
table,
tr,
td {
  --uno: border-base border-1;
} 

table tr td {
  --uno: w-26px h-26px text-center;
}

tr td:nth-child(1),
tr td:nth-last-child(1) {
  --uno: w-40px;
}
</style>

