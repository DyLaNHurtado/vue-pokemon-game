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
          uri:'',
          name:'All-in',
          description:'All pokemons within',
        },{
          uri:'',
          name:'1st Generation',
          description:'Only pokemons of Kanto',
    
        },{
          uri:'',
          name:'2nd Generation',
          description:'Only pokemons of Jhoto',
        },{
          uri:'',
          name:'3rd Generation',
          description:'Only pokemons of Hoenn',
        },{
          uri:'',
          name:'4th Generation',
          description:'Only pokemons of Sinnoh',
        },{
          uri:'',
          name:'5th Generation',
          description:'Only pokemons of Unova',
        },{
          uri:'',
          name:'6th Generation',
          description:'Only pokemons of Kalos',
        },{
          uri:'',
          name:'7th Generation',
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