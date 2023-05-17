<template>
    <QuestionTemplate
        :Question="Question"
        :Options="Options"
        :ColorBackground="'#51181A'"
        @next-question="nextQuestion"
    >
</QuestionTemplate>
</template>
<script>
import QuestionTemplate from '../components/QuestionTemplate.vue';

export default {
    name: 'Question5View',
    data() {
        return {
            Question: 'Luffy quiere convertirse en: ',
            Options: [
                { id: 1, option: 'hombre mas sexy del mundo', isCorrect: false },
                { id: 2, option: 'El sultan', isCorrect: false },
                { id: 3, option: 'El rey de los piratas', isCorrect: true },
                { id: 4, option: 'El presidente', isCorrect: false }
            ]
        }
    },
    components: {
        QuestionTemplate
    },
    methods: {
        nextQuestion() {
            this.$router.push('/Award');
        }
    }
}
</script>
