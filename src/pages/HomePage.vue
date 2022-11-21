<template>
    <div class="home-container">
        <div class="title-container">
            <h2>Pokemon Challenge</h2>
            <span>Guess the pokemon by name</span>
        </div>
        <div class="image-container">
            <img src="../assets/home.gif"  onerror="this.style.display='none'"/>
        </div>
        <div class="bottom-container">
            <PlayButton />
        </div>
    </div>
</template>
<script>
import PlayButton from '@/components/PlayButton.vue';

export default {
    name: 'HomePage',
    components: {
        PlayButton
    },
}
</script>
<style scoped>
.home-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}

.title-container {
    min-width: 100%;
    background-color: #2C363F;
    padding: 20px 0;
    border-bottom: 8px solid #E75A7C;
}

h2 {
    font-family: 'PixelColeco';
    font-size: 3em;
    margin: 0;
    margin-bottom: 20px;
    color: #E75A7C;
}

span {
    font-size: 1.5em;
    color: #BBC7A4;
}

.image-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    height: 400px;
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

.bottom-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
    background-color: #D6DBD2;
    border-top: 8px solid #BBC7A4;
}
</style>