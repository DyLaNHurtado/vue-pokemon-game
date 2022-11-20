<template>
    <router-link to="/game">
        <li @click="selectMode">
            <div class="img-container">
                <img
                    :src="uri ? uri : 'https://raw.githubusercontent.com/DyLaNHurtado/vue-pokemon-game/master/src/assets/loader.gif'" />
            </div>
            <div class="option-container">
                <span id="name">{{ name || 'Loading...' }}</span>
                <span id="description">{{ description }}</span>
            </div>
        </li>
    </router-link>
</template>
    
<script>
export default {
    name: 'GameMode',
    props: {
        id: {
            type: Number,
            required: true,
        },
        uri: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        }
    }, methods: {
        selectMode() {
            console.log(this.id);
            localStorage.setItem('mode', this.id);
        }
    }
}
</script>
    
<style scoped>
li {
    background-color: #D6DBD2;
    display: flex;
    flex-direction: row;
    box-shadow: none;
    z-index: 2;
    border: 2px solid #BBC7A4;
    transition: all .3s;
}

li:hover {
    background-color: #2C363F;
    z-index: 3;
    box-shadow: 0px 0px 5px #BBC7A4;
    border: 2px solid #E75A7C;
    box-shadow: 0px 0px 8px #E75A7C;
}

img {
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

.option-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.img-container {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#name {
    font-family: 'PixelColeco';
}

li:hover .option-container #name {
    color: #E75A7C
}

li:hover .option-container #description {
    color: #BBC7A4
}
</style>