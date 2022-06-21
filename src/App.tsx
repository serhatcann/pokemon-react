import { useEffect, useState } from 'react';
import { fetchPokemons } from './services/pokemon';

function App() {
	const [count, setCount] = useState<number>(0);
	const [pokemons, setPokemons] = useState<string>('');

	useEffect(() => {
		fetchPokemons({}).then((res) => setPokemons(JSON.stringify(res)));
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<p>Hello Vite + React!</p>
				<p>
					<button type='button' onClick={() => setCount((count) => count + 1)}>
						count is: {count}
					</button>
				</p>
				<p>{pokemons}</p>
				<p>
					Edit <code>App.tsx</code> and save to test HMR updates.
				</p>
			</header>
		</div>
	);
}

export default App;
