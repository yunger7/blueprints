export function Container({ children }) {
	return (
		<main
			style={{
				minHeight: 600,
				maxWidth: 900,
				padding: 16,
				margin: "0 auto",
				border: "1px solid gray",
			}}
		>
			{children}
		</main>
	);
}
