<template>
    <h1>¿Cual es este Pokemon?</h1>
    <PokemonPicture :pokemonId="4" :showPokemon="true"/>
    <PokemonOptions :pokemons="pokemonArr"/>
</template>
<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions.js';
export default {
    name: 'PokemonPage',
  components: {
    PokemonPicture,PokemonOptions
  },
  data(){
    return{
      pokemonArr:[]
    }
  },
  methods:{
    async mixPokemonsArr(){
      this.pokemonArr = await getPokemonOptions();
    }
  },
  mounted(){
    this.mixPokemonsArr();
  }
}
</script>