<template>
    <div class="stat">
        <h4>{{ label }}</h4>
        <div class="stat-value">{{ value }}</div>
    </div>
</template>
<script>
export default {
    name: 'Stat',
    props: {
        label: {
            type: String,
            required: true,
        },
        value: {
            type: [String, Number],
            required: true,
        }
    }
}
</script>
<style scoped>
h4 {
    font-family: 'TimeBurnerBold';
    color: #2C363F;
    background-color: #2C363F;

    padding: 5px 0;
    margin: 0;
    background-color: #BBC7A4;

}

.stat-value {
    margin: 0;
    color: #E75A7C;
    padding: 5px 0;
}

.stat {
    background-color: #D6DBD2;
    margin-bottom: 10px;
    font-weight: bolder;
    border: 1px solid transparent;
    transition: all 0.3s;
}

.stat:hover {
    border: 1px solid #E75A7C;
    box-shadow: 0px 0px 4px #E75A7C;
}
</style>
