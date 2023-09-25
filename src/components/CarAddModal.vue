<template>
  <div class="addBtn">
    <Button style="margin-top: 5px" label="Добавить машину" @click="toggleVisible" />
  </div>
  <Dialog class="dialog" v-model:visible="visible" modal header="Выставить автомобиль" :style="`width: '50vw'; color:green;`">
    <template #default>
      <div class="p-fluid">
        <div class="p-field">
          <label for="brand"></label>
          <Dropdown style="margin-top: 10px; margin-bottom:10px" id="brand" v-model="newAuto.brand" editable :options="brandLabel" option-label="brand" option-value="brand" placeholder="Бренд" />
        </div>
        <div class="p-field">
          <label for="price">Цена:</label>
          <InputNumber style="margin-top: 10px; margin-bottom:10px" id="price" v-model="newAuto.price" mode="currency" currency="KZT" locale="ru-ru" />
        </div>
        <div class="p-field">
          <label for="year">Год:</label>
          <Calendar style="margin-top: 10px; margin-bottom:10px" id="year" v-model="newAuto.year" view="year" dateFormat="yy" />
        </div>
        <div class="p-field">
          <label for="volume">Объем двигателя:</label>
          <InputNumber style="margin-top: 10px; margin-bottom:10px" id="volume" v-model="newAuto.volume" />
        </div>
        <div class="p-field">
          <label for="color">Цвет:</label>
          <ColorPicker style="margin-top: 10px; margin-bottom:10px; margin-left: 14px; width:90%" id="color" v-model="newAuto.color" />
        </div>
        <div class="p-field">
          <label for="city"></label>
          <Dropdown style="margin-top: 10px; margin-bottom:10px" id="city" v-model="newAuto.city" editable :options="cityLabel" option-label="city" option-value="city" placeholder="Город" />
        </div>
        <div class="p-field">
          <label for="carcase"></label>
          <Dropdown id="carcase" v-model="newAuto.carcase" editable :options="carcaseLabel" option-label="carcase" option-value="carcase" placeholder="Кузов" />
        </div>
        <div class="p-field" id="corobka">
          <label for="gear"></label>
          <div style="margin: 20px; margin-left: 25px" id="gear" v-for="(gear, index) in gearLabel">
            <label :for="index">{{ gear }}</label>
            <RadioButton class="radio" :key="gear" v-model="newAuto.gear" :value="gear" :inputId="gear" :name="gear" :id="index" />
          </div>
        </div>
        <div class="p-field">
          <label for="travel">Пробег</label>
          <Slider style="margin-top: 20px; margin-bottom:10px"  v-model="newAuto.travel" :min="0" :max="500000" :step="1000" />
        </div>
        <form class="input__wrapper" enctype="multipart/form-data">
          <input id="inputfile" class="input inputfile" name="images" type="file" accept=".jpg, .png" @input="onUpload($event)" />
          <label for="inputfile" class="inputfile-button">
            <span class="input__file-icon-wrapper">
              <img class="input__file-icon" src="@/assets/addCarIcon.jpeg" alt="Выбрать файл" width="25" />
            </span>
            <span class="input__file-button-text">Загрузить фотографию</span>
          </label>
        </form>
      </div>
    </template>
    <template #footer>
      <Button label="Сбросить" icon="pi pi-times" @click="clearAuto" text />
      <Button label="Добавить" icon="pi pi-check" @click="addAuto" autofocus />
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'
import ColorPicker from 'primevue/colorpicker'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import { useAuto } from '@/composable/useAuto'

async function onUpload(e) {
    const image = e.target.files[0]
    await uploadImage(image)
  }
const { newAuto, createAuto, clear, uploadImage } = useAuto()
const visible = ref(false)
const toggleVisible = () => {
  visible.value = !visible.value
}


async function addAuto() {
  await createAuto()
  toggleVisible()
}

function clearAuto() {
  clear()
  toggleVisible()
}

const gearLabel = ['Механика ', 'Автомат ', 'Робот ', 'Вариатор ']

const brandLabel = [
  { brand: 'BMW' },
  { brand: 'Audi' },
  { brand: 'Mercedes' },
  { brand: 'Volkswagen' },
  { brand: 'Volvo' },
  { brand: 'Toyota' },
  { brand: 'Nissan' },
  { brand: 'Mazda' },
  { brand: 'Honda' },
  { brand: 'Hyundai' },
  { brand: 'Mitsubishi' },
  { brand: 'Kia' },
  { brand: 'Lexus' },
  { brand: 'Ford' },
  { brand: 'Chevrolet' },
  { brand: 'Skoda' },
  { brand: 'Peugeot' },
]

const cityLabel = [
  { city: 'Алматы' },
  { city: 'Нур-Султан' },
  { city: 'Шымкент' },
  { city: 'Актобе' },
  { city: 'Атырау' },
  { city: 'Караганда' },
  { city: 'Кокшетау' },
  { city: 'Костанай' },
  { city: 'Кызылорда' },
  { city: 'Павлодар' },
  { city: 'Петропавловск' },
  { city: 'Семей' },
  { city: 'Талдыкорган' },
  { city: 'Тараз' },
  { city: 'Туркестан' },
  { city: 'Уральск' },
  { city: 'Усть-Каменогорск' },
  { city: 'Шымкент' },
  { city: 'Экибастуз' },
  { city: 'Другой' },
]

const carcaseLabel = [
  { carcase: 'Седан' },
  { carcase: 'Хэтчбек' },
  { carcase: 'Универсал' },
  { carcase: 'Купе' },
  { carcase: 'Кабриолет' },
  { carcase: 'Лифтбек' },
  { carcase: 'Лимузин' },
  { carcase: 'Минивэн' },
  { carcase: 'Пикап' },
  { carcase: 'Родстер' },
  { carcase: 'Фастбек' },
  { carcase: 'Другой' },
]


</script>

<style>
.addBtn {
 display: flex;
 justify-content: end;
 margin-top: -64px;
 margin-right: 20px;
 margin-bottom: 40px;
}

.dialog {
  width: 600px;
}

.p-field:nth-child(1) {
  margin-top: 10px;
}

#corobka {
  display: flex;
} 

#inputfile{
  display: none;
}

.input__file-icon {
  width: 55px;
  height: 55px;
  margin-top: 10px;
}

.input__file-icon-wrapper {
  display: flex;
  justify-content: center;
}

.input__file-button-text{
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

</style>