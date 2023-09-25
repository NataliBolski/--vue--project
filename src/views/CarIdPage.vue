<template>
  <div class="car-details-container">
      <div v-if="!auto">
          <Skeleton width="100vw" height="100vw"></Skeleton>
      </div>
      <div>
        <Card class="cardId">
            <template #title></template>
            <template #content>
              <div class="table" v-if="auto">
                <img :src="auto.image" alt="Car" class="car-image" />
                <div class="car-info">
                    <h2 class="car-brand">{{ auto.brand }}</h2>
                    <p class="car-price">{{ auto.price }} тг</p>
                    <p class="car-year">Год выпуска: {{ new Date(auto.year.seconds * 1000).getFullYear() }} г </p>
                    <p class="car-volume">Объем двигателя: {{ auto.volume }} л</p>
                    <p class="car-city">Город: {{ auto.city }}</p>
                    <p class="car-carcase">Кузов: {{ auto.carcase }}</p>
                    <p class="car-gear">Коробка передач: {{ auto.gear }}</p>
                    <p class="car-travel">Пробег: {{ auto.travel }} км</p>
                    <Button>Добавить в избранные</Button>
                    <Button :disabled="auto.saled">Купить</Button>
                </div>
                </div>
            </template>
        </Card>
    </div>
</div>
</template>

<script setup>
import Card from 'primevue/card';
import { useAuto } from '../composable/useAuto';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Skeleton from 'primevue/skeleton';
import Button from 'primevue/button';


const { auto, getAuto } = useAuto();
const route = useRoute();


onMounted(async () => {
await getAuto(route.params.id);
});

</script>

<style setup>
.cardId{
  margin-top: 30px;
  margin-bottom: 25px;
  margin-left: 10px;
  margin-right: 10px;
  height: 500px;
  width: 900px;
  text-align: center;
  display: flex;;

}

.car-image {
  height: 350px;
  width:550px;
  margin-bottom: 20px;
  margin-right: 30px;
}

.car-info{
  text-align: center;
}

.table{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.car-details-container {
  justify-content: center;
  display: flex;
}


</style>