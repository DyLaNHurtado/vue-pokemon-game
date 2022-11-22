<template>
  <div id="bg-dark" v-show="finishDialog"></div>
  <h1 id="wait" v-show="!pokemon.id">Wait please ...</h1>
  <Transition>
    <div v-show="pokemon.id" class="game-container">
      <h1>Who is that pokemon?</h1>
      <PokemonPicture :pokemon="pokemon" :showPokemon="showPokemon" />
      <PokemonOptions @selection-pokemon="checkAnswer" :pokemonCorrect="pokemon" :pokemons="pokemonArr" />
      <Timer :time="time" @timeUp="finishGame" :needReset="needReset"/>
      <PanelButtons :display="'game'" class="panel" />
      <Transition>
        <FinishDialog v-show="finishDialog" @replayFinish="replayGame" :score="score" :totalCount="totalCount" :correctCount="correctCount" :timeRate="timeRate" />
      </Transition>
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
import FinishDialog from '@/components/FinishDialog.vue';
export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions,
    HomeButton,
    PanelButtons,
    Timer,
    FinishDialog
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: {},
      showPokemon: false,
      correctCount: 0,
      totalCount: 0,
      score: 0,
      timeRate: 0,
      timeRateInterval: null,
      finishDialog: false,
      time:10,
      needReset:false,
    }
  },
  methods: {
    async mixPokemonsArr() {
      this.pokemonArr = await getPokemonOptions(localStorage.getItem('mode'));
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    checkAnswer(isCorrect) {
      this.showPokemon = true;
      if (isCorrect) {
        this.correctCount += 1;
        this.score += 5;
      } else {
        this.score -= 3;
      }
      this.totalCount += 1;
      setTimeout(() => this.newGame(), 500);
    }, newGame() {
      this.pokemonArr = [];
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemon = {};
      this.mixPokemonsArr();
    },finishGame(){
      clearInterval(this.timeRateInterval);
      this.totalCount!==0 
        ? this.timeRate /= this.totalCount 
        : this.timeRate = this.time;
        
      console.log(this.timeRate);
      setTimeout(()=>this.finishDialog = true, 500);
      this.needReset = false;
    },replayGame(){
      this.needReset = true;
      this.finishDialog = false;
      this.timeRate = 0;
      this.score = 0;
      this.correctCount = 0;
      this.totalCount = 0;
      this.timeRateInterval = setInterval(()=> this.timeRate += 1 ,1000);

      this.newGame();
    }
  },
  mounted() {
    this.mixPokemonsArr();
    this.timeRateInterval = setInterval(()=> this.timeRate += 1 ,1000);
  }
}
</script>
<style scoped>
#bg-dark{
  background-color: #222222be;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  z-index: 99;
}
</style>