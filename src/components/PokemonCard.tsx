import { Card, Text, Image } from '@mantine/core';

const PokemonCard = ({ name, id }: { name: string; id: string }) => {
	return (
		<Card
			shadow='sm'
			p='lg'
			sx={(theme) => ({
				backgroundColor: theme.colors.gray[2],
				'&:hover': {
					backgroundColor: theme.colors.gray[5],
				},
			})}>
			<Card.Section>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
					height={200}
					alt={name}
				/>
			</Card.Section>
			<Text size='sm' align='center'>
				{name}
			</Text>
		</Card>
	);
};

export default PokemonCard;
