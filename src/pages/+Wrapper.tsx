import { useGoogleFonts } from '../lib/use-google-fonts';

import '../index.css';

export default function Wrapper({ children }: { children: React.ReactNode }) {
	useGoogleFonts([['Source Code Pro', '100,200,300,400,500,600,700,800,900']], {
		addBodyClass: true,
		display: 'swap',
	});

	return children;
}
