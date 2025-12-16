import axios from 'axios';
import { type ReactNode, useEffect, useState } from 'react';

export default function Page() {
	const [repoCards, setRepoCards] = useState<Array<ReactNode>>();

	useEffect(() => {
		axios.get('https://api.github.com/users/NathanielJamie/repos').then((d) => {
			const data = d.data as Array<{ name: string }>;

			setRepoCards(
				data.map((d, index) => (
					<p key={index} className='flex items-center px-2 m-0 bg-gray-300 w-fit rounded-lg'>
						{d.name}
					</p>
				))
			);
		});
	}, []);

	return repoCards;
}
