import './assets/main.css'
import PrimeVue from 'primevue/config';
import { initializeApp } from "firebase/app";
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css';
import 'primevue/chip';
import 'primevue/resources/themes/saga-green/theme.css'

const firebaseConfig = {
    apiKey: "AIzaSyABFMXfiKE8CENSmQtMB8pU4qKHu_JcFco",
    authDomain: "vue-project-9320a.firebaseapp.com",
    projectId: "vue-project-9320a",
    storageBucket: "vue-project-9320a.appspot.com",
    messagingSenderId: "96548651486",
    appId: "1:96548651486:web:917349c1ea8e436dd5dd4f",
    measurementId: "G-G1YTXETC58"
  };
  
initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.mount('#app')
