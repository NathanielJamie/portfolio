import { usePageContext } from 'vike-react/usePageContext';

export function Head() {
	const pageContext = usePageContext();

	return (
		<>
			{/* More Open Graph tags */}
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='Site' />
			<meta property='og:url' content={pageContext.urlParsed.href} />

			{/* PWA settings */}
			<meta name='theme-color' content='#9601e0' />
		</>
	);
}
