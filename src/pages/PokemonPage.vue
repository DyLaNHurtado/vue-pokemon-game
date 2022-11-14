<template>
  <h1 id="wait" v-show="!pokemon.id">Wait please ...</h1>
<Transition>
  <div v-show="pokemon.id" class="game-container" >
    <h1>Who is that pokemon?</h1>
    <PokemonPicture :pokemon="pokemon" :showPokemon="showPokemon"/>
    <PokemonOptions @selection-pokemon="checkAnswer" :pokemonCorrect="pokemon" :pokemons="pokemonArr" />
    <Timer :time="11"/>
    <PanelButtons class="panel"/>
  </div>
</Transition>
</template>
<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import HomeButton from '@/components/HomeButton.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions.js';
import PanelButtons from '@/components/PanelButtons.vue';
import Timer from '@/components/Timer.vue';
export default {
    name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
    HomeButton,
    PanelButtons,
    Timer
},
  data(){
    return{
      pokemonArr:[],
      pokemon:{},
      showPokemon:false,
      correctCount:0,
      totalCount:0,
    }
  },
  methods:{
    async mixPokemonsArr(){
      this.pokemonArr = await getPokemonOptions(localStorage.getItem('mode'));
      const rndInt = Math.floor(Math.random()*4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(isCorrect){
      this.showPokemon=true;
      if(isCorrect){
        this.correctCount += 1;
      }
      this.totalCount+=1;
      setTimeout(()=> this.newGame(),500);
    },newGame(){
      this.pokemonArr=[];
      this.showPokemon=false;
      this.showAnswer=false;
      this.pokemon={};
      this.mixPokemonsArr();
    }
  },
  mounted(){
    this.mixPokemonsArr();
  }
}
</script>