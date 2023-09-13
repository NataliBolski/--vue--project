import { collection, getDocs, addDoc } from "firebase/firestore";  
import { db } from "@/firebases";  
import { getStorage, uploadBytes, getDownloadURL } from "firebase/storage";  
import { ref, computed} from "vue";  
import {createId, formatDate} from '../services/methods'
  
export const useAuto = () => {  
  const newAuto = ref({ 
    id: createId(), 
    brand: '', 
    price: '', 
    year: '', 
    volume: '', 
    color: '', 
    city: '', 
    carcase: '', 
    gear: '', 
    travel: 0, 
    images: null, 
    saled: false, 
  });  
 
  const autoList = ref([]);  
  const auto = ref(null);  
  
  const loading = ref({  
    auto: false,  
    autoList: false,  
    newAuto: false,  
  });  
  
const autoListRemake = computed(() => {

  const _autoListRemake = autoList.value.map((auto) => {
    auto.price = `${parseInt(auto.price).toFixed(2) }KZT`,
    auto.value = `${auto.value} л`,
    auto.travel = `${auto.travel} км`,
    auto.age = `${new Date().getFullYear() - auto.year} лет`,
    auto.year = `${auto.year} год`,
    auto.color =` #${auto.color}`,
    auto.date = formatDate(auto.year)
    return auto 
  })
  return autoListRemake || []
})





  async function createAuto() {  
    loading.value.newAuto = true;  
    try {  
      await addDoc(collection(db, "autos"), newAuto.value).then(async() => {  
        await getAutoList(); 
      });  
    } catch (e) {  
      console.error("Error: ", e);  
    }  
  }  
  
  async function getAutoList() {  
    loading.value.autoList = true;  
    try {  
      const querySnapshot = await getDocs(collection(db, "autos"));  
      querySnapshot.forEach((doc) => {  
        autoList.value.push(doc.data());  
      });  
    } catch (e) {  
      console.error("Error: ", e);  
    } finally {  
      loading.value.autoList = false;  
    }  
  }  

  function clear(){
    newAuto.value = {
      id: createId(), 
      brand: '', 
      price: '', 
      year: '', 
      volume: '', 
      color: '', 
      city: '', 
      carcase: '', 
      gear: '', 
      travel: 0, 
      images: null, 
      saled: false, 
    }
    autoList.value = []
    auto.value = null 
  }
  
  return {  
    createAuto,  
    getAutoList,  
    auto,  
    clear,
    newAuto, 
    autoListRemake,
    loading,  
  };  
};