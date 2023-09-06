<script setup>
import CarList from "@/components/CarList.vue";
import CarTable from "@/components/CarTable.vue";
import CarsNav from "@/components/CarsNav.vue"; 
import Navbar from "./components/layouts/Navbar.vue";


const cars = [
  {
    brand: 'BMW X5',
    price: '2000000',
    year: 2015,
    volume: 3.5,
    color: '#FFF',
    criticalNumber: 1,
    image: 'https://image-server.autospot.ru/images/1/0/3/3/7/0/7045720/origin/7045720.png',
  },
  {
    brand: 'Chevrolet D-Max Hi-Ride',
    price: '3000000',
    year: 2020,
    volume: 2.5,
    color: '#FF0000',
    criticalNumber: 2,
    image: 'https://s1.1zoom.ru/big0/688/Chevrolet_D-Max_Hi-Ride_2020_Pickup_Wine_color_596483_1280x853.jpg',
  },
  {
    brand: 'Nissan GT-R Nismo',
    price: '4000000',
    year: 2019,
    volume: 3.5,
    color: '#FFF',
    criticalNumber: 2,
    image: 'https://s1.1zoom.ru/big0/212/Nissan_GT-R_Nismo_2019_R35_White_background_White_576817_1280x853.jpg',
  },
  {
    brand: 'Volkswagen Amarok',
    price: '3000000',
    year: 2012,
    volume: 3.5,
    color: '#FFF',
    criticalNumber: 2,
    image: 'https://s1.1zoom.ru/big0/11/Volkswagen_Amarok_W580_AU-spec_2020_Pickup_White_597725_1280x853.jpg',
  },
  {
    brand: 'Suzuki',
    price: '2000000',
    year: 2020,
    volume: 3.5,
    color: '#0000FF',
    criticalNumber: 2,
    image: 'https://s1.1zoom.ru/big0/72/Suzuki_Cars_Escudo_S_Limited_2020_Blue_Metallic_596906_1280x853.jpg',
  },
  {
    brand: 'Mitsubishi Eclipse Cross',
    price: '3000000',
    year: 2022,
    volume: 3.5,
    color: '#FFF',
    criticalNumber: 6,
    image: 'https://s1.1zoom.ru/big0/893/Mitsubishi_Eclipse_Cross_PHEV_Ralliart_Style_2022_609899_1280x853.jpg',
  },
  

]
</script>

<template>
  <Navbar />
  <CarsNav :cars="cars" />
  <CarList :cars="cars" />
  <CarTable :cars="cars" />
</template>

<style scoped>


</style>
