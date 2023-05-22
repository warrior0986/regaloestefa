<template>
    <div>
    <div class="container">
        <v-card :color="ColorBackground">
            <v-card-title style="color:white!important;" class="customStyle">
               {{ Question }}
            </v-card-title>    
            <v-card-text>
                <v-row>
                    <v-col align="center" :key="option.id" v-for="option in Options">
                        <v-btn class="customStyle" @click="validateAnswer(option.isCorrect)" :prependIcon="option.icon">
                            {{ option.option }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
    <v-snackbar
      v-model="showSuccess"
      color="success"
      timeout="-1"
      transition="fade-transition"
    >
      Muy bien
      <template v-slot:actions>
        <v-btn
          color="white"
          variant="outlined"
          @click="nextQuestion"
        >
          Siguiente Pregunta
        </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar
      v-model="showError"
      color="error"
      timeout="-1"
      transition="fade"
    >
      Error, intenta de nuevo
    </v-snackbar>
    </div>
</template>
<script>

export default {
    name: 'QuestionTemplate',
    props: {
        Question: {
            type: String,
            required: true
        },
        Options: {
            type: Array,
            required: true
        },
        ColorBackground: {
            type: String,
            default: '#ffffff'
        },
    },
    data() {
        return {
            showSuccess: false,
            showError: false,
        }
    },
    methods: {
        validateAnswer(value) {
            if (value) {
                this.showSuccess = true;
                this.showError = false;
            } else {
                this.showError = true;
                this.showSuccess = false;
            }
        },
        nextQuestion() {
            this.$emit('nextQuestion');
        }
    },
    emits: ['nextQuestion']
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

.customStyle {
    white-space: break-spaces!important;
    font-size: x-large!important;
}
    
</style>