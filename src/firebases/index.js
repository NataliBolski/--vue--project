
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyABFMXfiKE8CENSmQtMB8pU4qKHu_JcFco",
  authDomain: "vue-project-9320a.firebaseapp.com",
  projectId: "vue-project-9320a",
  storageBucket: "vue-project-9320a.appspot.com",
  messagingSenderId: "96548651486",
  appId: "1:96548651486:web:917349c1ea8e436dd5dd4f",
  measurementId: "G-G1YTXETC58"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }