import { Fragment } from 'react/jsx-runtime';
import { useGoogleFonts } from '../lib/use-google-fonts';
import '../index.css';
import Portfolio from './portfolio'; // import your Portfolio component with correct +page filename

export default function Wrapper() {
	useGoogleFonts([['Source Code Pro', '100,200,300,400,500,600,700,800,900']], {
		addBodyClass: true,
		display: 'swap',
	});

	return (
		<Fragment>
			{/* Header */}
			<header className='flex justify-center items-center h-20 text-4xl font-bold text-white bg-gray-900 drop-shadow-lg'>
				Portfolio
			</header>

			{/* Portfolio Content */}
			<Portfolio />
		</Fragment>
	);
}
