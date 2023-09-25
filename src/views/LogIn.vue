<template>
    <div class="login">
        <button type="button" class="p-link p-ml-auto" @click="googleRegister">
        <i class="pi pi-google"></i>
        <p>Зарегистрироваться через Google</p>
        </button>
    </div>
  </template>
  
  <script setup>
  import 'primeicons/primeicons.css';
  import Button from 'primevue/button'
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
  
  const googleRegister = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
  
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }
  </script>

<style>
.login {
    display: flex;
    flex-direction: column;
}
.p-link {
    text-align: center;
    margin-top: 50px;
    font-size: 20px;
    border: 1px rgba(192, 192, 192, 0.331) solid;
    padding: 80px;
    background-color: #f8f9fa
}

.login i{
   font-size: 80px;
   margin-bottom: 10px;

}

.pi {
  transition: transform 0.2s;
}
.pi:hover {
  color: rgb(23, 173, 0);
  transform: translateY(-5px);
}
</style>