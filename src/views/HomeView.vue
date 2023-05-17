<template>
  <div id="content">
    <div class="title"> ¿PUEDES ENCONTRAR EL ONE PIECE? </div>
  </div>
  <div class="button-container">
    <a @click="redirectToOtherComponent('Question1View')" class="btn">Empezar</a>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Question1View from './Question1View.vue'

const router = useRouter();
  export default {
    name: 'HomeView',
    components: {
    },
    methods: {
      redirectToOtherComponent($component) {
        this.$router.push('/Question1View')
      }
    }
}
</script>

<style>
.title {
  font-size: 3rem;
  font-weight: bold;
  color: #A00000;
  text-align: center;
  margin-top: 20%;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  text-align: center;
}

.button-container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  background-color: #A00000;
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: rgba(255,255,255,0.3);
  transition: all 0.3s ease;
  z-index: -1;
}

.btn:hover::before {
  width: 100%;
}

.btn:hover {
  background-color: #0051a5;
  box-shadow: 0px 8px 15px rgba(0,0,0,0.3);
  border-radius: 10px;
}
</style>