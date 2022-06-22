import { Loader } from '@mantine/core';
import { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import useStore from '../store/pokemonStore';

const PokemonList = () => {
	const { pokemons, status, getPokemons } = useStore((state) => state);

	useEffect(() => {
		getPokemons();
	}, []);

	if (status === 'Pending') return <Loader color='dark' />;
	if (status === 'Success')
		return (
			<ul>
				{pokemons?.map((p) => (
					<PokemonCard key={p.url} name={p.name} url={p.url}></PokemonCard>
				))}
			</ul>
		);
	return <div>Something went wrong while fetching pokemons!</div>;
};

export default PokemonList;
