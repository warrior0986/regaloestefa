<template>  
  <audio id="audio">
    <source src="../assets/audio/op.mp3" type="audio/mpeg">
  </audio>
  <div>
    <v-alert style="z-index:9999;" color="success" icon="volume-high" dismissible>
      <v-icon left>mdi mdi-volume-high</v-icon>
        Sube el volumen, es mejor con música
    </v-alert>
  </div>
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
import '@mdi/font/css/materialdesignicons.css';

const router = useRouter();
  export default {
    name: 'HomeView',
    components: {
    },
    methods: {
      redirectToOtherComponent($component) {
        // var audio = document.getElementById("audio");
        var audio = new Audio('/op.mp3');
        audio.play();
        console.log("playing audio");
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
  z-index: 99;
}

.btn:hover {
  background-color: #0051a5;
  box-shadow: 0px 8px 15px rgba(0,0,0,0.3);
  border-radius: 10px;
}
</style>