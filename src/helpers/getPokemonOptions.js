
import pokemonApi  from '@/api/pokemonApi';

const getPokemon = ()=>{

    const pokemonArr = Array.from(Array(905));

    return pokemonArr.map((element,index)=> index +1) 

}
const getPokemonNames = async([a,b,c,d] =[])=>{

   const response = await pokemonApi.get(`/1`);
    const arrPromises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)


    ];
    const [p1,p2,p3,p4] = await Promise.all(arrPromises);
    return [
        {name:p1.data.name,id:p1.data.id},
        {name:p2.data.name,id:p2.data.id},
        {name:p3.data.name,id:p3.data.id},
        {name:p4.data.name,id:p4.data.id},
    
    ]
}

const getPokemonOptions = async()=>{

    const mixedPokemon = getPokemon().sort( ()=> Math.random() - 0.5 );
    
    return await getPokemonNames(mixedPokemon.splice(0,4));

}
export default getPokemonOptions
