import { Container, Stack } from '@mantine/core';
import PokemonDetails from './pages/pokemon-details';
import PokemonList from './pages/pokemon-list';
import { Route, Switch } from 'wouter';

function App() {
	return (
		<Stack>
			<header className='App-header' style={{ height: '40px' }}>
				TEST
			</header>
			<Container size='xl'>
				<Switch>
					<Route path='/home' component={PokemonList} />
					<Route path='/details/:id'>
						{(params) => <PokemonDetails id={params.id} />}
					</Route>
				</Switch>
			</Container>
		</Stack>
	);
}

export default App;
