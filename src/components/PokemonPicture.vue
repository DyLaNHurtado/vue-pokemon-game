<template >
    <div class="pokemon-container">
        <img v-show="!pokemon.id" class="loader" src="../assets/loader.gif">
        <img  :src="imgSrc" :class="!showPokemon ? 'hidden-pokemon':''" />
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
    -webkit-user-drag: none;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    transition: all .2s;

}
    .hidden-pokemon{
        filter: brightness(0);
    }
    .loader{
        filter: drop-shadow(0 0 0.75rem #2C363F)
        
    }
</style>