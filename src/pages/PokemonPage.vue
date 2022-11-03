<template>
  <h1 v-if="!pokemon">Wait please ...</h1>
  
  <div v-else class="game-container" >
    <h1>Who is that pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions @selection-pokemon="checkAnswer" :pokemonId="pokemon.id" :pokemons="pokemonArr" @send-answer="" />
    Score: {{score}}
    <template v-if ="showAnswer">
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
      score:0,
    }
  },
  methods:{
    async mixPokemonsArr(){
      this.pokemonArr = await getPokemonOptions();
      const rndInt = Math.floor(Math.random()*4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(isCorrect){
      this.showPokemon=true;
      if(isCorrect){
        this.score += 10;
      }else{
        this.score-=3;
      }
      setTimeout(()=> this.newGame(),500);
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