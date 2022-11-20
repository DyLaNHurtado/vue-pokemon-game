<template>
<div v-if="display==='finish'" class="panel-container">
    <HomeButton/>
    <GameModeButton/>
    <HomeButton/>
</div>
<div v-else class="panel-container">
    <HomeButton/>
    <HomeButton/>
</div>
</template>
<script>
import GameModeButton from './GameModeButton.vue';
import HomeButton from './HomeButton.vue';
export default {
    name:'PanelButtons',
    components:{
    HomeButton,
    GameModeButton
},
    props:{
        display:{
            type:String,
            required:true
        }
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