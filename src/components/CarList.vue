<script setup>
import CarItem from '@/components/CarItem.vue'
import { defineProps, onMounted } from 'vue'
import {useAuto} from '../composable/useAuto' 
import Card from 'primevue/card';

const {autoListRemake, getAutoList} = useAuto()

onMounted(async() => {
  await getAutoList();
})



//   const cars = [ 
//     { 
//     name: "Toyota", 
//     model: 'Hybryd', 
//     price: "10000000", 
//     year: 1999, 
//     volume: 5.4, 
//     color: "#000000", 
//     image: "https://toyota.com.ua/uploads/fastUpload/toyota-hybrid-istoriya-rozvitku-ta-cikavi-fakti-1-1600x900tcm-3046-1766941.jpg.webp", 
//     criticalNumber: 5 
//   },  
//   { 
//     name: "Cadillac", 
//     model: 'Escalade', 
//     price: "20000000", 
//     year: 2003, 
//     volume: 6.2, 
//     color: "#000000", 
//     image: "https://cdn.motor1.com/images/mgl/lNnnl/s1/4x3/cadillac-escalade-sport-edition.webp", 
//     criticalNumber: 2 
//   }, 
//   { 
//     name: "Maybach", 
//     model: 'S-680', 
//     price: "22000000", 
//     year: 2023, 
//     volume: 5.9, 
//     color: "#200403", 
//     image: "https://media.ed.edmunds-media.com/mercedes-benz/maybach/2022/oem/2022_mercedes-benz_maybach_sedan_s-680-4matic_fq_oem_2_1600.jpg", 
//     criticalNumber: 3 
//   }, 
//   { 
//     name: "Lexus", 
//     model: 'RX', 
//     price: "10000000", 
//     year: 2020, 
//     volume: 6.0, 
//     color: "#272A31", 
//     image: "https://images.drive.ru/i/0/5f882a61ec05c4fe2d00002f.jpg", 
//     criticalNumber: 4 
//   }, 
//   { 
//     name: "Toyota", 
//     model: 'Hybryd', 
//     price: "10000000", 
//     year: 1999, 
//     volume: 5.4, 
//     color: "#000000", 
//     image: "https://toyota.com.ua/uploads/fastUpload/toyota-hybrid-istoriya-rozvitku-ta-cikavi-fakti-1-1600x900tcm-3046-1766941.jpg.webp", 
//     criticalNumber: 5 
//   }, 
// ]
// </script>

<template>
  <Card class="card">
    <template #content>
      <section class="cars" v-for="auto in autoListRemake" :key="auto">
        <CarItem :auto="auto" />
      </section>
    </template>
</Card>
</template>
