import create from 'zustand';
import { Pokemon, Query, Status } from '../pokemon';
import { fetchPokemons } from '../services/pokemon';

interface PokemonState {
	pokemons: Pokemon[];
	status: Status;
	getPokemons: (query: Query) => void;
}

const useStore = create<PokemonState>()((set) => ({
	pokemons: [],
	status: 'Pending',
	getPokemons: async ({ limit, offset }: Query) => {
		fetchPokemons({ limit, offset }).then((res) => {
			if (res?.results) set({ pokemons: res.results, status: 'Success' });
			else set({ status: 'Error' });
		});
	},
}));

export default useStore;
