<script setup>
import CarList from "@/components/CarList.vue";
import CarTable from "@/components/CarTable.vue";
import CarAddModal from "@/components/CarAddModal.vue"; 
import CarsNavbar from "@/components/CarsNavbar.vue";
import {ref} from 'vue'; 


const auto = ref({
    id: '',
    brand: '',
    price: '',
    saled: false,
    city: '',
    carcase: '',
    volume: '',
    color: '',
    gear: '',
    year: '',
    travel: '',
    images: [],
  })
</script>

<template>
  <CarsNavbar /> 
  <CarAddModal />
  <CarTable /> 
</template>


