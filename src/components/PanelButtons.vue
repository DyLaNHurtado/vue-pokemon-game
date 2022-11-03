<template>
<div class="panel-container">
    <HomeButton/>
    <HomeButton/>
</div>
</template>
<script>
import HomeButton from './HomeButton.vue';
export default {
    name:'PanelButtons',
    components:{
        HomeButton
    }
}
</script>
<style scoped>
.panel-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>