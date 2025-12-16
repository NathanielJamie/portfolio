import axios from 'axios';
import { type ReactNode, useEffect, useState } from 'react';
import { Card, CardHeader } from '../../components/ui/card';
import { Seperator } from '../../components/ui/seperator';

export default function Page() {
	const [repoCards, setRepoCards] = useState<Array<ReactNode>>();

	useEffect(() => {
		axios.get('https://api.github.com/users/NathanielJamie/repos').then((d) => {
			const data = d.data as Array<{ name: string; html_url: string }>;

			setRepoCards(
				data.map((d, index) => (
					<Card key={index} className='bg-gray-300 text-black h-full px-2'>
						<CardHeader className='py-3'>{d.name}</CardHeader>
						<Seperator />
					</Card>
				))
			);
		});
	}, []);

	return repoCards;
}
