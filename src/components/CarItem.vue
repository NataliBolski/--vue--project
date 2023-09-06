<script setup>
import{defineProps, computed} from 'vue'
import Card from 'primevue/card'
import Chip from 'primevue/chip'

const props = defineProps({
  car: {
    type: Object,
     required: true,
  },
})
    
const carRemake = computed(() => { //позволяет менять объект
  return{
    ...props.car,
    price: props.car.price + ' $',
    kpd: "тут будет что-то",
  }
})

function changeColor(color) {
  const crappyColors = ["#FF0000", "#0000FF"];

  if(crappyColors.includes(color)) {
    return true
  }
    return false
  }
</script>

<template>
  <div class="cont">
    <Card class="cars">
      <template #header>
        <img :src="carRemake.image" alt="car" class="car-image" />
      </template>
      <template #title></template>
      <template #content>
        <p>Цена: {{ carRemake.price }}</p>
        <p>Год выпуска: {{ carRemake.year }}</p>
        <p>Объем двигателя: {{ carRemake.volume }}</p>
        <p>Цвет: {{carRemake.color}}</p>
      </template>
      <template #footer>
        <div class="chipes">
          <Chip v-if="Number(carRemake.price.slice(0, -1)) > 1000000" label="Дорогой" icon="pi pi-dollar"/>         
          <Chip v-if="Number(carRemake.price.year) < 1960" label="Cтарый" icon="pi-circle-fill"></Chip>
          <Chip v-if="changeColor(carRemake.color)" label="Конченный цвет" icon="pi pi-eye-slash"></Chip> 
        </div>
      </template>
    </Card>
  </div>
</template>

<style >
#app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
}

.cars {
  height: 600px;
  width: 500px;
  margin-bottom: 30px;
}

#content{
  margin-top: 20px;
}

body {
  text-align: center;
}

img{
  width: 500px;
  height: 300px;
}

.p-chip {
    display: inline-flex;
    align-items: center;
    margin-left: 10px;
}
</style>