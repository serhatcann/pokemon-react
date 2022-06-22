export type Pokemon = {
	name: string;
	url: string;
};

export type Query = {
	limit?: number;
	offset?: number;
};

export type Status = 'Pending' | 'Success' | 'Error';
