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
            </v-card>
        </div>
        <div class="after"></div>
    </div>
</template>
<script>

export default {
    name: 'Award',
    data() {
        return {
            showViaje: false,
            showPC: false,
            showUniversidad: false,
            containerClass: "container",
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
