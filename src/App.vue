<script setup>
import { RouterView } from 'vue-router'
import CarsNavbar from '@/components/CarsNavbar.vue'
import CarAddModal from '@/components/CarAddModal.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <CarsNavbar />
  <SideBar />
  <CarAddModal />
  <router-view />
</template>

<style scoped>
</style>
