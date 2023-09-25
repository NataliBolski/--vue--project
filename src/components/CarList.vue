<script setup>
import CarItem from "@/components/CarItem.vue";
import { useAuto } from "../composable/useAuto";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const { autoListRemake, getAutoList } = useAuto();
const router = useRouter();

onMounted(async () => {
  await getAutoList();
});

function goToCarUrl(id) {
  router.push({ name: "car", params: { id } });
}
</script>

<template>
  <section class="cars" v-for="auto in autoListRemake" :key="auto">
    <CarItem :auto="auto" @click="goToCarUrl(auto.id)" />
  </section>
</template>

<style>
.cars {
  transition: transform 0.2s;
}

.cars:hover {
  transform: scale(1.1);
}
</style>
