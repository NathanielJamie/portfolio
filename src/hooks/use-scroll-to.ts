function useDocumentScroll() {
	return (id: string) => {
		if (!id) return;

		const element = document.getElementById(id);
		if (!element) return;

		element.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center',
		});
	};
}

export { useDocumentScroll };
