<template>
    <div class="card relative z-2">
        <div class="menu">
            <Menubar class="menubar" :model="items" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';

const items = ref([
    {
        label: 'Главная',
        icon: 'pi pi-car',
    },
    {
        label: 'Машины',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'Добавить',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'Мои машины',
                icon: 'pi pi-sun',
            },
            {
                label: 'Избранное',
                icon: 'pi pi-star'
            },
            {
                separator: true
            },
        ]
    },

    {
        label: 'Мои данные',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Добавить пользователя',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Выйти',
                icon: 'pi pi-fw pi-user-minus'
            },
        ]
    },
    {
        label: 'Чат',
        icon: 'pi pi-whatsapp'
    }
]);

</script>

<style> 

</style>