<template>
    <div class="dialog fade-in">
        <h2>⏱️ Time out!</h2>
        <div class="stats-container">
            <h3>Stats:</h3>
            <Stat :label="'Score:'" :value="score" />
            <Stat :label="'Correct Count:'" :value="correctCount" />
            <Stat :label="'Incorrect Count:'" :value="totalCount - correctCount" />
            <Stat :label="'Total anwsered Count:'" :value="totalCount" />
            <Stat :label="'Average Response Time:'" :value="timeRate" />
        </div>
        <PanelButtons :display="'finish'" class="panel" style="height: 20%;" />
    </div>
</template>
<script>
import PanelButtons from './PanelButtons.vue';
import Stat from './Stat.vue';

export default {
    name: "FinishDialog",
    props: {
        score: {
            type: Number,
            required: true,
        },
        correctCount: {
            type: Number,
            required: true,
        },
        totalCount: {
            type: Number,
            required: true,
        },
        timeRate: {
            type: Number,
            required: true,
        }
    },
    methods: {},
    components: { PanelButtons, Stat }
}
</script>
<style scoped>
.dialog {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 80%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    padding: 10px 15px;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    background: #F2F5EA;
    color: rgba(0, 0, 0, 0.87);
    border: 8px solid #BBC7A4;
    z-index: 100;
}

h2 {
    font-size: 1.7em;
    font-family: 'PixelColeco';

}

h3 {
    font-size: 1.5em;
    box-shadow: 0px 0px 8px #BBC7A4;
}

.stats-container {
    width: 100%;
    height: 70%;
}
</style>