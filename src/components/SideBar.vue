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
        <div class="sub">
        <Button id="btn" type="submit" label="" icon="pi pi-facebook"/>
        <Button id="btn" type="submit" label="" icon="pi pi-reddit" />
        <Button id="btn" type="submit" label="" icon="pi pi-twitter" />
        </div>
      </Sidebar>
    <Button id="reviewBtn" icon="pi pi-plus" @click="visible = true" />
</div>
</template>

<script setup>
import 'primeicons/primeicons.css';
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'
import { ref } from "vue";

const visible = ref(false);
</script>

<style>
#slider{
    text-align: center;
    margin-top: -72px;
    margin-left: -700px;
    margin-bottom: 15px;
}
.p-component, .p-component  {
    margin-bottom: 5px;
    margin-top: 5px;
    box-sizing: border-box;
}

.p-sidebar-close{
    display: none;
}
.sub {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
}

#btn{
  border-radius: 50%;
  transition: transform 0.2s;
}

#btn:hover{
  transform: translateY(-5px);
}
</style>