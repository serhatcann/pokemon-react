import { Query, Pokemon } from '../pokemon';

export const fetchPokemons = async ({ limit = 20, offset = 20 }: Query) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokesmon/?limit=${limit}&offset=${offset}`,
	);
	if (!response.ok) {
		return;
	}
	const result = await response.json();
	return result;
};
