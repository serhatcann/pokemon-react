import { Container, Stack } from '@mantine/core';
import PokemonList from './pages/pokemon-list';

function App() {
	return (
		<Stack>
			<header className='App-header'>TEST</header>
			<Container size='xl'>
				<PokemonList />
			</Container>
		</Stack>
	);
}

export default App;
