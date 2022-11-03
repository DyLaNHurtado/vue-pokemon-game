<template>
  <h1 v-if="!pokemon">Wait please ...</h1>
  <div v-else>
    <h1>Who is that pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions @selection-pokemon="checkAnswer" :pokemons="pokemonArr" />
    <template v-if ="showAnswer">
      <h2>{{message}}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
    <PanelButtons class="panel"/>
  </div>
    
</template>
<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import HomeButton from '@/components/HomeButton.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions.js';
import PanelButtons from '@/components/PanelButtons.vue';
export default {
    name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
    HomeButton,
    PanelButtons
},
  data(){
    return{
      pokemonArr:[],
      pokemon:null,
      showPokemon:false,
      showAnswer:false,
      message:'',
    }
  },
  methods:{
    async mixPokemonsArr(){
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random()*4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(pokemonId){
      this.showPokemon=true;
      this.showAnswer = true;
      if(pokemonId ===this.pokemon.id){
        this.message = `Correct, it was ${this.pokemon.name}`
      }else{
        this.message = `Oops, it was ${this.pokemon.name}`
      }
    },newGame(){
      this.pokemonArr=[];
      this.showPokemon=false;
      this.showAnswer=false;
      this.pokemon=null;
      this.mixPokemonsArr();
    }
  },
  mounted(){
    this.mixPokemonsArr();
  }
}
</script>