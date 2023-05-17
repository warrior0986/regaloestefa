<template>
    <QuestionTemplate
        :Question="Question"
        :Options="Options"
        :ColorBackground="'#5E557C'"
        @next-question="nextQuestion"
    >
</QuestionTemplate>
</template>
<script>
import QuestionTemplate from '../components/QuestionTemplate.vue';
import gomu from '../components/SVGIcons/gomugomunomi.vue';
import jiki from '../components/SVGIcons/jikijikinomi.vue';
import mera from '../components/SVGIcons/merameranomi.vue';
import yomi from '../components/SVGIcons/yomiyominomi.vue';

export default {
    name: 'Question2View',
    data() {
        return {
            Question: '¿Cómo se llama la fruta del diablo de Luffy?',
            Options: [
                { id: 1, option: 'Yomi Yomi no mi', isCorrect: false, icon: yomi },
                { id: 2, option: 'Mera Mera no mi', isCorrect: false, icon: mera },
                { id: 3, option: 'Jiki Jiki no mi', isCorrect: false, icon: jiki },
                { id: 4, option: 'Gomu Gomu no mi', isCorrect: true, icon: gomu }
            ]
        }
    },
    components: {
        QuestionTemplate
    },
    methods: {
        nextQuestion() {
            this.$router.push('/Question3View');
        }
    }
}
</script>
