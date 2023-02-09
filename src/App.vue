<template data-theme="custom_theme">
  <router-view></router-view>

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
</style>
