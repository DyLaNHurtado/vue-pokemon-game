<template>
    <router-link to="/game">
        <li @click="selectMode">
            <div class="img-container">
                <img :src="uri" onerror="this.style.display='none'" />
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
    min-height: 100%;
    z-index: 2;
    border: 0.5px solid #BBC7A4;
    transition: all .3s;
}

li:hover {
    background-color: #BBC7A4;
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

li:active{
    transition: all 0.1s;
    scale: 0.9;
}

</style>