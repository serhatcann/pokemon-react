import create from 'zustand';
import { Pokemon, Status } from '../pokemon';
import { fetchPokemons } from '../services/pokemon';

interface PokemonState {
	pokemons: Pokemon[];
	status: Status;
	getPokemons: () => void;
}

const useStore = create<PokemonState>()((set) => ({
	pokemons: [],
	status: 'Pending',
	getPokemons: async () => {
		fetchPokemons({}).then((res) => {
			if (res?.results) set({ pokemons: res.results, status: 'Success' });
			else set({ status: 'Error' });
		});
	},
}));

export default useStore;
