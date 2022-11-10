<template>
<router-view></router-view>
<a href="https://github.com/DyLaNHurtado" target="_blank">
  <footer>
    <span>Made with 💗 by DyLaNHurtado </span>
  </footer>
</a>
</template>

<script>
import PokemonPage from './pages/PokemonPage'

export default {
  name: 'App',
  components: {
    PokemonPage
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
  font-family: 'TimeBurner';
}
a{
  text-align: center;
  text-decoration: none;
  font-family: 'TimeBurner';
  color: #2c3e50;
}
footer{
  text-align: center;
  text-decoration: none;
  font-family: 'TimeBurnerBold';
  position: fixed;
  bottom: 0;
  color: #2c3e50;
  min-width: 100%;
  transition: all .5s;
  padding: 2px 0;
}
footer:hover{
  background-color: #2c3e50;
  color: #BBC7A4;
  padding: 10px 0;
}
</style>
