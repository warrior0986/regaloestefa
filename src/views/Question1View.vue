<template>
    <QuestionTemplate
        :Question="Question"
        :Options="Options"
        :ColorBackground="'#28b61b'"
        @next-question="nextQuestion"
    >
</QuestionTemplate>
</template>
<script>
import QuestionTemplate from '../components/QuestionTemplate.vue';
import zoro from '../components/SVGIcons/zoro.vue';
import nami from '../components/SVGIcons/nami.vue';
import sanji from '../components/SVGIcons/sanji.vue';
import ussop from '../components/SVGIcons/ussop.vue';

export default {
    name: 'Question1View',
    data() {
        return {
            Question: '¿Quién es considerado el vicecapitan de los Mugiwara?',
            Options: [
                { id: 1, option: 'Zoro', isCorrect: true, icon: zoro},
                { id: 2, option: 'Nami', isCorrect: false, icon: nami },
                { id: 3, option: 'Sanji', isCorrect: false, icon: sanji},
                { id: 4, option: 'Usopp', isCorrect: false, icon: ussop }
            ]
        }
    },
    components: {
        QuestionTemplate
    },
    methods: {
        nextQuestion() {
            this.$router.push('/Question2View');
        }
    }
}
</script>
