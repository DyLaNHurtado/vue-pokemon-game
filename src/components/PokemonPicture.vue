<template >
    <div class="pokemon-container">
        <img :src="imgSrc" :class="!showPokemon ? 'hidden-pokemon':''" class="fade-in" />
    </div>
</template>
<script>
export default {
    name:'PokemonPicture',
    props:{
        pokemon:{
            type: Object ,
            required:true,
        },showPokemon:{
            type:Boolean,
            required:true,
            default:false,
        }
    },computed:{
        imgSrc(){
            if(this.pokemon.id){
             return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.id}.png`
            }else{
                return '';
            }
        }
    }

}
</script>
<style scoped>
.pokemon-container{
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
}
    .hidden-pokemon{
        filter: brightness(0);
    }
</style>