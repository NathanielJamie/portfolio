import { useGoogleFonts } from '../lib/use-google-fonts';

import '../index.css';
import { Fragment } from 'react/jsx-runtime';

export default function Wrapper({ children }: { children: React.ReactNode }) {
	useGoogleFonts([['Source Code Pro', '100,200,300,400,500,600,700,800,900']], {
		addBodyClass: true,
		display: 'swap',
	});

	return <Fragment>
		<header className='flex justify-center items-center border-b border-black/50 h-17'>I HEARD EDEN HAS KIDS IN HIS BASEMENT</header>
		{children}
	</Fragment>;
}
