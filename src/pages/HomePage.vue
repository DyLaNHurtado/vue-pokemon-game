<template>
    <div class="home-container">
        <div class="title-container">
            <h2>Pokemon Challenge</h2>
            <span>Guess the pokemon by name</span>
        </div>
        <div class="image-container"></div>
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
    min-width: 100%;
    min-height: 50%;
    background-position: center;
    animation: imageAnimation 30s linear infinite 0s;
    -moz-animation: imageAnimation 30s linear infinite 0s;
    animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(../assets/home.gif);
}

@keyframes imageAnimation {
  25% {
    background-image: url(../assets/home.gif);
    animation-timing-function: ease-in;
    -moz-animation-timing-function: ease-in;
  }
  50% {
    background-image: url(../assets/home3.gif);
    animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
  }
  75% {
    background-image: url(../assets/home4.gif);
    animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
  }
  100% {
    background-image: url(../assets/home2.gif);
    animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
  }
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