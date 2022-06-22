import { Pokemon } from '../pokemon';

export const buildPokemonArray = (pokemonArr: Pokemon[]) => {
	return pokemonArr.map((pokemon) => {
		return { ...pokemon, id: pokemon.url.split('/').at(-2) };
	});
};
