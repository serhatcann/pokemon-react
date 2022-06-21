type Query = {
	limit?: number;
	offset?: number;
};

export const fetchPokemons = async ({ limit = 20, offset = 20 }: Query) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
	);
	const result = await response.json();
	return result;
};
