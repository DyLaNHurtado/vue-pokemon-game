<template>
    <router-link to="/game">
        <li>
            <div class="img-container">
                <img :src="uri ? uri : 'https://raw.githubusercontent.com/DyLaNHurtado/vue-pokemon-game/master/src/assets/loader.gif'" />
            </div>
            <div class="option-container">
                <span>{{name || 'Loading...'}}</span>
                <span>{{description}}</span>
            </div>
        </li>
    </router-link>
</template>
    
    <script>
    export default {
        name:'GameMode',
        props:{
            uri:{
                type:String,
                required:true,
            },
            name:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                default:'',
            }
        }
    }
    </script>
    
    <style scoped>
    li{
        background-color: #D6DBD2;
        display: flex;
        flex-direction: row;
        box-shadow: none;
        z-index: 2;
        border:2px solid #BBC7A4;
        transition: all .3s;
        font-family: 'PixelColeco';
    }
    li:hover{
        background-color: #F2F5EA;
        z-index: 3;
        box-shadow: 0px 0px 5px #BBC7A4;
        border:2px solid #E75A7C;
        box-shadow: 0px 0px 8px #E75A7C; 
    }

    img{
    height: 100px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-drag: none;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
    }

    .option-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .img-container{
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    </style>