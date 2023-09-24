<script setup>
import { defineProps, computed } from 'vue'
import Card from 'primevue/card'
import Chip from 'primevue/chip'

defineProps({
  auto: {
    type: Object,
    required: true,
  },
})


function changeColor(color) {
  const crappyColors = ['#FF0000', '#00FF00', '#0000FF']
  if (crappyColors.includes(color)) {
    return true
  }
  return false
}
</script>

<template>
  <div class="carsTable">
  <Card class="card">
    <template #header>
      <img class="car-image" :src="auto.image">
    </template>
    <template #title> {{ auto.brand }} </template>
    <template class="content" #content>
      <p>Цена: {{ auto.price }}</p>
      <p>Год выпуска: {{ auto.year }}</p>
      <p>Объем двигателя: {{ auto.volume }}</p>
      <p>Город: {{ auto.city }}</p>
      <p>Кузов: {{ auto.carcase }}</p>
      <p>Пробег: {{ auto.travel }}</p>
    </template>
    <template #footer>
      <Chip v-if="Number(auto.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-apple" />
      <Chip icon="pi pi-history" label="Старый" v-else-if="Number(auto.year) <= 1960" />
      <Chip icon="pi pi-briefcase" label="Скучный" v-else />
      <Chip icon="pi pi-eye-slash" label="Конченный цвет" v-if="changeColor(auto.color)" />
    </template>
  </Card>
</div>
</template>

<style scoped>
.card {
  margin-top: 30px;
  margin-bottom: 25px;
  margin-left: 10px;
  margin-right: 10px;
  height: 500px;
  width: 900px;
  text-align: center;
  display: flex;;
  padding-top: 35px;
}
.card img {
height: 350px;
width:550px;
margin-bottom: 20px;
margin-right: 30px;
}

.carsTable {
  display: flex;
  justify-content: center;
  background-color: #f8f9fa
}

</style>