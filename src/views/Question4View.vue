<template>
    <QuestionTemplate
        :Question="Question"
        :Options="Options"
        :ColorBackground="'#19ADD0'"
        @next-question="nextQuestion"
    >
</QuestionTemplate>
</template>
<script>
import QuestionTemplate from '../components/QuestionTemplate.vue';

export default {
    name: 'Question4View',
    data() {
        return {
            Question: '¿Cómo se llama el tesoro mas grande del mundo?',
            Options: [
                { id: 1, option: 'Las frutas del diablo', isCorrect: false },
                { id: 2, option: 'Haki', isCorrect: false },
                { id: 3, option: 'El Grand Line', isCorrect: false },
                { id: 4, option: 'El One Piece', isCorrect: true }
            ]
        }
    },
    components: {
        QuestionTemplate
    },
    methods: {
        nextQuestion() {
            this.$router.push('/Question5View');
        }
    }
}
</script>
