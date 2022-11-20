
import pokemonApi from '@/api/pokemonApi'

const getPokemon = (mode) => {
  if (mode === '0') {
    const pokemonArr = Array.from(Array(905))
    return pokemonArr.map((element, index) => index + 1)
  } else if (mode === '1') {
    const pokemonArr = Array.from(Array(151))
    return pokemonArr.map((element, index) => index + 1)
  } else if (mode === '2') {
    const pokemonArr = Array.from(Array(100))
    return pokemonArr.map((element, index) => index + 152)
  } else if (mode === '3') {
    const pokemonArr = Array.from(Array(135))
    return pokemonArr.map((element, index) => index + 252)
  } else if (mode === '4') {
    const pokemonArr = Array.from(Array(110))
    return pokemonArr.map((element, index) => index + 387)
  } else if (mode === '5') {
    const pokemonArr = Array.from(Array(155))
    return pokemonArr.map((element, index) => index + 494)
  } else if (mode === '6') {
    const pokemonArr = Array.from(Array(71))
    return pokemonArr.map((element, index) => index + 650)
  } else if (mode === '7') {
    const pokemonArr = Array.from(Array(87))
    return pokemonArr.map((element, index) => index + 722)
  } else if (mode === '8') {
    const pokemonArr = Array.from(Array(95))
    return pokemonArr.map((element, index) => index + 810)
  }
}
const getPokemonNames = async ([a, b, c, d] = []) => {
  const arrPromises = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`)

  ]
  const [p1, p2, p3, p4] = await Promise.all(arrPromises)
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id }
  ]
}

const getPokemonOptions = async (mode) => {
  const mixedPokemon = getPokemon(mode).sort(() => Math.random() - 0.5)

  return await getPokemonNames(mixedPokemon.splice(0, 4))
}
export default getPokemonOptions
