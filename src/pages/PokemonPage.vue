<template>
    <h1>¿Cual es este Pokemon?</h1>
    <PokemonPicture/>
    <PokemonOptions/>
</template>
<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
export default {
    name: 'PokemonPage',
  components: {
    PokemonPicture,PokemonOptions
  }
}
</script>