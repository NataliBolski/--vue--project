<template>
    <div class="nav">
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>Здесь могла бы быть ваша реклама.</p>
        </Sidebar>
        <Button class="pi pi-list" @click="visible = true" />
    </div> 
        <MultiSelect v-model="selectedCars" :options="cars" optionLabel="name" placeholder="Выберите машину "
        :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>  
</template>

<script setup>
import 'primeicons/primeicons.css';
import MultiSelect from 'primevue/multiselect';
import { defineProps, ref, computed, watch } from 'vue'
import Sidebar from 'primevue/sidebar';

const visible = ref(false);
const selectedCars = ref();
const cars = ref([
    { name: 'BMW X5', code: 'BMW X5' },
    { name: 'Chevrolet D-Max Hi-Ride', code: 'Chevrolet' },
    { name: 'Nissan GT-R Nismo', code: 'Nissan' },
    { name: 'Volkswagen Amarok', code: 'Volkswagen' },
    { name: 'Suzuki', code: 'Suzuki' },
    { name: 'Mitsubishi Eclipse Cross', code: 'Mitsubishi'}
]);
</script>

<style>
.nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 20px 30px;
}
.p-multiselect .p-multiselect-label.p-placeholder {
    color: #6c757d;
    padding: 10px 30px;
}

.pi {
    padding: 5px;
}
</style>