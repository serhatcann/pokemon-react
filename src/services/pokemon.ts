import { Query } from '../pokemon';
import { buildPokemonArray } from '../utils/pokemon';

export const fetchPokemons = async ({ limit = 30, offset = 0 }: Query) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
	);
	if (!response.ok) {
		return;
	}

	let result = await response.json();
	const pokemons = buildPokemonArray(result.results);

	result = { ...result, results: pokemons };

	return result;
};
