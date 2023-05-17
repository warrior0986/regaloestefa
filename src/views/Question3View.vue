<template>
    <QuestionTemplate
        :Question="Question"
        :Options="Options"
        :ColorBackground="'#A00000'"
        @next-question="nextQuestion"
    >
</QuestionTemplate>
</template>
<script>
import QuestionTemplate from '../components/QuestionTemplate.vue';

export default {
    name: 'Question3View',
    data() {
        return {
            Question: '¿Cuál es el nombre completo de Luffy?',
            Options: [
                { id: 1, option: 'Ramiro D. Luffy', isCorrect: false },
                { id: 2, option: 'Monkey D. Luffy', isCorrect: true },
                { id: 3, option: 'Mugiwara No Luffy', isCorrect: false },
                { id: 4, option: 'Pedro el Escamoso', isCorrect: false }
            ]
        }
    },
    components: {
        QuestionTemplate
    },
    methods: {
        nextQuestion() {
            this.$router.push('/Question4View');
        }
    }
}
</script>
