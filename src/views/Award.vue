<template>
    <div class="pyro">
        <div class="before"></div>
        <div v-if="showViaje" class="containerTop">
            <img src="../assets/img/viaje.gif" alt="">
        </div>
        <div v-if="showPC" class="containerTop">
            <img src="../assets/img/pc.jpg" alt="">
        </div>
        <div v-if="showUniversidad" class="containerTop">
            <img src="../assets/img/u.jpg" alt="">
        </div>
        <div :class="containerClass">
            <v-card :color="ColorBackground">
                <v-card-title class="customStyle" align="center">
                ELIGE TU PREMIO
                </v-card-title>    
                <v-card-text>
                    <v-row>
                        <v-col align="center">
                            <v-btn class="customStyle" @click="chooseAward('viaje')">
                                Viaje
                            </v-btn>
                        </v-col>
                        <v-col align="center">
                            <v-btn class="customStyle" @click="chooseAward('pc')">
                                PC
                            </v-btn>
                        </v-col>
                        <v-col align="center">
                            <v-btn class="customStyle" @click="chooseAward('u')">
                                Semestre Universidad
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="success" variant="flat" @click="sendResponse" :disabled="isButtonDisabled">
                        <v-icon left>mdi mdi-send</v-icon>
                      Enviar
                    </v-btn>
                  </v-card-actions>
            </v-card>
        </div>
        <div class="after"></div>
    </div>
    <template>
        <div class="text-center ma-2">
          <v-snackbar
            v-model="snackbar"
          >
            <span>Mensaje Enviado</span>
      
            <template v-slot:actions>
              <v-btn
                color="red"
                variant="text"
                @click="snackbar = false"
              >
                Cerrar
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </template>
</template>
<script>
import '@mdi/font/css/materialdesignicons.css';
import emailjs from 'emailjs-com';

export default {
    name: 'Award',
    data() {
        return {
            showViaje: false,
            showPC: false,
            showUniversidad: false,
            containerClass: "container",
            snackbar: false,
        }
    },
    computed: {
        isButtonDisabled() {
            if (this.showViaje || this.showPC || this.showUniversidad) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        chooseAward(option) {
            switch (option)  {
                case 'viaje':
                    this.showViaje = true;
                    this.showPC = false;
                    this.showUniversidad = false;
                    this.containerClass = "containerTop";
                    break;
                case 'pc':
                    this.showViaje = false;
                    this.showPC = true;
                    this.showUniversidad = false;        
                    this.containerClass = "containerTop";            
                    break;
                case 'u':
                    this.showViaje = false;
                    this.showPC = false;
                    this.showUniversidad = true;
                    this.containerClass = "containerTop";           
                    break;
            
                default:
                    break;
            }
        },
        sendResponse() {
            let response = this.showViaje ? 'viaje' : this.showPC ? 'pc' : 'universidad';
            emailjs.send('service_33ek6c6', 'template_0fymv02', { premio: response }, 'sCf8sYEIh3nfVBt0w')
                .then((response) => {
                    this.snackbar = true;
                    console.log('Email sent!', response.status, response.text);
                })
                .catch((error) => {
                    console.error('Email error:', error);
                });

        }
    }
}
</script>
<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    margin: 15px;
    background-repeat: no-repeat;
    background-size: cover;
  }

.containerTop {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    margin: 15px;
    background-repeat: no-repeat;
    background-size: cover;
  }

.customStyle {
    white-space: break-spaces!important;
    font-size: x-large!important;
}

img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
}
    
</style>
<style lang="scss">
  @import "../assets/css/fireworks.scss";
</style>
