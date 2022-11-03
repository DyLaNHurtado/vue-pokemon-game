<template >
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selectionPokemon',pokemon.id)" >
                {{pokemon.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'PokemonOptions',
    props:{
        pokemons:{
            type:Array,
            required:true,
        }
    }
}
</script>
<style scoped>
    ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
li {

    cursor: pointer;
    background-color: #D6DBD2;
    border-radius: 500px;
    padding: 0.5em 6em;
    margin-bottom: 0.5em;
    z-index: 2;
    font-family: 'PixelColeco';
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
}

li:hover {
    z-index: 3;
    background-color: #BBC7A4;
    color:#F2F5EA;
    -webkit-box-shadow: 0 0 14px rgba(34, 44, 55, 0.3);
    -moz-box-shadow: 0 0 14px rgba(34, 44, 55, 0.3);
    box-shadow: 0 0 14px rgba(34, 44, 55, 0.3);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>