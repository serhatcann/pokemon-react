import { Card, Text, Image, Button, Stack } from '@mantine/core';
import { useRef } from 'react';

const PokemonCard = ({ name, id }: { name: string; id: string }) => {
	const buttonRef = useRef<any>();
	const toggleButton = () => {
		if (buttonRef?.current?.style) {
			if (buttonRef.current.style.visibility === 'hidden') {
				buttonRef.current.style.visibility = 'visible';
			} else buttonRef.current.style.visibility = 'hidden';
		}
	};

	return (
		<Card
			onMouseEnter={toggleButton}
			onMouseLeave={toggleButton}
			shadow='sm'
			p='lg'
			sx={(theme) => ({
				backgroundColor: theme.colors.gray[2],
				transition: 'transform .2s',
				'&:hover': {
					backgroundColor: theme.colors.gray[5],
					transform: 'scale(1.3)',
					'z-index': '1',
				},
			})}>
			<Card.Section>
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
					height={200}
					alt={name}
				/>
			</Card.Section>
			<Stack align='center'>
				<Text size='sm' align='center'>
					{name}
				</Text>
				<Button
					ref={buttonRef}
					color='dark'
					style={{ visibility: 'hidden' }}
					size='xs'
					compact>
					Show details
				</Button>
			</Stack>
		</Card>
	);
};

export default PokemonCard;
