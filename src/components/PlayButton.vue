<template>
    <router-link to="/mode">
        <button>
                <PlayIcon class="icon"/><span>Play</span>
        </button>
    </router-link>
</template>
    
    <script>
    import PlayIcon from '@/assets/icons/PlayIcon.vue'
    export default {
        name:'PlayButton',
        props:{
            
        },components:{
            PlayIcon,
        }
    }
    </script>
    
    <style scoped>
    button{
        text-align: center;
        width: 80vw;
        border:6px solid #BBC7A4;
        padding: 20px;
        display: flex;
        font-size: 2em;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10vw;
        color:#BBC7A4;
        border-radius: 500px;
        background-color: #2C363F;
        font-family: 'PixelColeco';
        -webkit-transition: all .2s;
        -moz-transition: all .2s;
        transition: all .2s;
        cursor: pointer;
    }
        button:hover{
            border:6px solid #E75A7C;
            box-shadow: 0px 0px 14px #E75A7C;
            color:#E75A7C;
        }
    </style>