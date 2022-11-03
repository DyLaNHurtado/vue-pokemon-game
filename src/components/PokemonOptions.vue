<template >
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="checkAnswer(pokemon.id)" :class="isAnswerReady && pokemon.id==pokemonId ? 'correct-option':''">
                <span v-if="isAnswerReady && pokemon.id==pokemonId">✅</span>
                <span v-if="isAnswerReady && pokemon.id!=pokemonId">❌</span>
                {{pokemon.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'PokemonOptions',
    data(){
        return{
            isAnswerReady:false,
            isCorrect:false,
        }
    },
    props:{
        pokemons:{
            type:Array,
            required:true,
        },
        pokemonId:{
            type:Number,
            required:true,
        }
    },methods:{
        checkAnswer(pokemonIdSelect){
            this.isAnswerReady=true
            console.log(this.pokemonId);
            if(this.pokemonId==pokemonIdSelect){
                this.isCorrect=true;
            }else{
                this.isCorrect=false;
            }
            this.$emit('selectionPokemon',this.isCorrect);
        }
    },watch:{
        pokemonId(){
            this.isAnswerReady=false;
            this.isCorrect=false;
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
    border: 2px solid #BBC7A4;
    font-family: 'PixelColeco';
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;
}

li:hover {
    background-color: #2C363F;
    color:#E75A7C;
    border:2px solid #2C363F;
    box-shadow: 0px 0px 6px #E75A7C;
}
.correct-option{
    background-color: #BBC7A4;
}
.correct-option:hover{
    background-color: #BBC7A4;
    color:#2C363F;
    border-color: #BBC7A4;
    box-shadow: none;
}
.options-container {
    display: flex;
    justify-content: center;
}
</style>