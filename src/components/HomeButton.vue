<template>
    <button>
            <HomeIcon class="icon"/><span>Home</span>
    </button>
</template>

<script>
import HomeIcon from '@/assets/icons/HomeIcon.vue'
export default {
    name:'HomeButton',
    props:{
        
    },components:{
        HomeIcon,
    }
}
</script>

<style scoped>
button{
    padding: 1.5em;
    text-align: center;
    border:2px solid #BBC7A4;
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:#2C363F;
    border-radius: 50px;
    background-color: #D6DBD2;
    font-family: 'PixelColeco';
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
    cursor: pointer;
}
    button:hover{
        border: none;
        background-color: #2C363F;
        color:#F2F5EA;
        border-radius: 15px;
        box-shadow: 0px 0px 8px #E75A7C;
    }
</style>