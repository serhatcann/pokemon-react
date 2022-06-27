import create from 'zustand';
import { Pokemon, Query, Status } from '../pokemon';
import { fetchPokemons } from '../services/pokemon';

interface PokemonState {
	pokemons: Pokemon[];
	status: Status;
	maxPage: number;
	getPokemons: (query: Query) => void;
}

const useStore = create<PokemonState>()((set) => ({
	pokemons: [],
	status: 'Pending',
	maxPage: 0,
	getPokemons: async ({ limit, offset }: Query) => {
		fetchPokemons({ limit, offset }).then((res) => {
			if (res?.results)
				set({
					pokemons: res.results,
					maxPage: Math.round(res.count / limit),
					status: 'Success',
				});
			else set({ status: 'Error' });
		});
	},
}));

export default useStore;
