<template >
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id" @click="checkAnswer(pokemon.id)" :class="isAnswerReady && pokemon.id==pokemonCorrect.id ? 'correct-option':''">
                <span v-show="isAnswerReady && pokemon.id==pokemonCorrect.id" style="align-self: flex-start;">✅</span>
                <span v-show="isAnswerReady && pokemon.id!=pokemonCorrect.id" style="align-self: flex-start;">❌</span>
                <span style="align-self: center; width: 100%;">{{pokemon.name}}</span>
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
        pokemonCorrect:{
            type:Object,
            required:true,
        }
    },methods:{
        checkAnswer(pokemonIdSelect){
            this.isAnswerReady=true
            if(this.pokemonCorrect.id==pokemonIdSelect){
                this.isCorrect=true;
            }else{
                this.isCorrect=false;
            }
            this.$emit('selectionPokemon',this.isCorrect);
        }
    },watch:{
        pokemonCorrect(){
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
    display: flex;
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
    text-align: center;
}
</style>