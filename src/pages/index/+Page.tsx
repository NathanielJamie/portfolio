import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';

export default function Page() {
	const [repoCards, setRepoCards] = useState<Array<ReactNode>>();

	useEffect(() => {
		axios.get('https://api.github.com/users/NathanielJamie/repos').then((d) => {
			const data = d.data as Array<{ name: string }>;

			setRepoCards(
				data.map((d, index) => (
					<p key={index} className='flex items-center p-6 m-0 bg-red-800 w-fit rounded-lg'>
						{d.name}
					</p>
				))
			);
		});
	}, []);

	return <div className='flex flex-col gap-3'>{repoCards}</div>;
}
