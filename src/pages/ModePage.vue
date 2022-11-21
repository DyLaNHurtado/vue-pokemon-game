<template>
  <h1>
    <GameModeIcon />Select A Game Mode
  </h1>
  <div class="gamemodes-container">
    <GameMode v-for="gamemode in gamemodes" :key="gamemode.id" :id="gamemode.id" :uri="gamemode.uri"
      :name="gamemode.name" :description="gamemode.description" />
  </div>
</template>
<script>

import GameModeIcon from '@/assets/icons/GameModeIcon.vue';
import GameMode from '@/components/GameMode.vue';

export default {
  name: 'ModePage',
  components: {
    GameMode,
    GameModeIcon
  },
  data() {
    return {
      gamemodes: [
        {
          id: 0,
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png',
          name: 'All-in',
          description: 'Free for all',
        }, {
          id: 1,
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
          name: '1st Generation',
          description: 'Only pokemons of Kanto',

        }, {
          id: 2,
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png',
          name: '2nd Generation',
          description: 'Only pokemons of Jhoto',
        }, {
          id: 3,
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png',
          name: '3rd Generation',
          description: 'Only pokemons of Hoenn',
        }, {
          id: 4,
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
          name: '4th Generation',
          description: 'Only pokemons of Sinnoh',
        }, {
          id: 5,
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png',
          name: '5th Generation',
          description: 'Only pokemons of Unova',
        }, {
          id: 6,
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png',
          name: '6th Generation',
          description: 'Only pokemons of Kalos',
        }, {
          id: 7,
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png',
          name: '7th Generation',
          description: 'Only pokemons of Alola',
        }, {
          id: 8,
          uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
          name: '8th Generation',
          description: 'Only pokemons of Galar',
        }]
    }
  },
}
</script>
<style scoped>
.gamemodes-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

h1 {
  display: flex;
  fill: #E75A7C;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1vw;
}

@media only screen and (max-width: 600px) {
  .gamemodes-container {
    display: flex;
    flex-direction: column;
    min-height: 50%;
  }
}
</style>