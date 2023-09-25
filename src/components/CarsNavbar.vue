<template>
    <div class="card relative z-2">
        <div class="menu">
            <Menubar class="menubar" :model="items"/>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import { useRouter } from "vue-router";
const router = useRouter();

const items = ref([
    {
        label: 'Главная',
        icon: 'pi pi-car',
        to: { name: 'cards' },
    },
    {
        label: 'Машины',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'Добавить',
                icon: 'pi pi-fw pi-plus',
                to: { name: 'add' },
            },
            {
                label: 'Мои машины',
                icon: 'pi pi-sun',
                to: { name: 'table' },
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
                icon: 'pi pi-fw pi-user-plus',
                to: { name: 'login' },
            },
            {
                label: 'Выйти',
                icon: 'pi pi-fw pi-user-minus'
            },
        ]
    },
]);


</script>

<style> 
.menu{
    margin-bottom: 20px;
    
}
</style>