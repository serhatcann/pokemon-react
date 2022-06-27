import { Container, Image, Group, Pagination } from '@mantine/core';
import { useState } from 'react';
import useStore from '../store/pokemonStore';
import serbazar from '../assets/serbazar.png';
import { Query } from '../pokemon';

const Header = () => {
	const [activePage, setPage] = useState(1);
	const { maxPage, getPokemons } = useStore((state) => state);

	const pageHandler = (e: any) => {
		let query: Query = { limit: 30, offset: (e - 1) * 30 };
		getPokemons(query);
		setPage(e);
	};

	return (
		<header className='App-header'>
			<Container>
				<Group position='apart' align='center'>
					<Image height={80} src={serbazar} alt='Pokemon Serbazar' />
					<Pagination
						total={maxPage}
						page={activePage}
						onChange={(e) => pageHandler(e)}
						color='dark'></Pagination>
				</Group>
			</Container>
		</header>
	);
};

export default Header;
