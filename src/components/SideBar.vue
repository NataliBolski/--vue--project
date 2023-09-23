<template>
<div id="slider">
    <Sidebar v-model:visible="visible">
        <h2>Ваш отзыв</h2>
        <p>Оставьте Ваш отзыв здесь, или напишите вопрос к нам, и мы свяжемся с Вами в ближайшее время!</p>
        <span class="p-float-label">
          <InputText id="username" v-model="value" />
          <label for="username">Ваше имя</label>
        </span>
        <span class="p-float-label">
          <InputText id="comment" v-model="comment" />
          <label for="comment">Ваш отзыв или вопрос</label>
        </span>
        <Button type="submit" label="Отправить" @click="handleSubmit" />
      </Sidebar>
    <Button id="reviewBtn" icon="pi pi-plus" @click="visible = true" />
</div>
</template>

<script setup>
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'
import { ref } from "vue";

const visible = ref(false);
</script>

<style>
#slider{
    text-align: center;
    margin-top: -58px;
    margin-left: -700px;
}
.p-component, .p-component  {
    margin-bottom: 5px;
    margin-top: 5px;
    box-sizing: border-box;
}



</style>