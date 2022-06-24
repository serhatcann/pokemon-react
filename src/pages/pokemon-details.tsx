import { Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getPokemonDetailsById } from '../services/pokemon';
import useStore from '../store/pokemonStore';

const pokemonDetails = ({ id }: { id: string }) => {
	const { status } = useStore((state) => state);
	const [pokemon, setPokemon] = useState(null);
	useEffect(() => {
		getPokemonDetailsById(id).then((res) => {
			if (res) {
				useStore.setState({ status: 'Success' });
			} else {
				useStore.setState({ status: 'Error' });
			}
			setPokemon(res);
		});
	}, []);
	if (status === 'Pending') return <Loader color='dark' />;
	if (status === 'Success') return <>{JSON.stringify(pokemon)}</>;
	return <div>Something went wrong while fetching pokemon!</div>;
};

export default pokemonDetails;
