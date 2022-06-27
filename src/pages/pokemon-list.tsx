import { Group, Loader } from '@mantine/core';
import { useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import useStore from '../store/pokemonStore';

const PokemonList = () => {
	const { pokemons, status, getPokemons } = useStore((state) => state);

	useEffect(() => {
		window.document.title = 'Pokemon Home';
		getPokemons({ limit: 30, offset: 0 });
	}, []);

	if (status === 'Pending') return <Loader color='dark' />;
	if (status === 'Success')
		return (
			<Group position='center'>
				{pokemons?.map((p) => (
					<PokemonCard key={p.id} name={p.name} id={p.id}></PokemonCard>
				))}
			</Group>
		);
	return <div>Something went wrong while fetching pokemons!</div>;
};

export default PokemonList;
