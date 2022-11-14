<template>
    <h1>Game Modes</h1>
    <div class="gamemodes-container">
      <GameMode v-for="gamemode in gamemodes" :key="gamemode.name" :uri="gamemode.uri" :name="gamemode.name" :description="gamemode.description"/>
    </div>
</template>
  <script>
  
import GameMode from '@/components/GameMode.vue';

  export default {
    name: 'ModePage',
    components: {
    GameMode
},
    data(){
      return{
        gamemodes:[
          {
          uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png',
          name:'All-in',
          description:'Free for all',
        },{
          uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
          name:'1st Generation',
          description:'Only pokemons of Kanto',
    
        },{
          uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png',
          name:'2nd Generation',
          description:'Only pokemons of Jhoto',
        },{
          uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png',
          name:'3rd Generation',
          description:'Only pokemons of Hoenn',
        },{
          uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
          name:'4th Generation',
          description:'Only pokemons of Sinnoh',
        },{
          uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png',
          name:'5th Generation',
          description:'Only pokemons of Unova',
        },{
          uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png',
          name:'6th Generation',
          description:'Only pokemons of Kalos',
        },{
          uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png',
          name:'7th Generation',
          description:'Only pokemons of Alola',
        },{
          uri:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
          name:'8th Generation',
          description:'Only pokemons of Galar',
        }]
      }
    },
  }
  </script>
  <style scoped>
    .gamemodes-container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }
  </style>