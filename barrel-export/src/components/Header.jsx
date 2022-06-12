export function Header({ title }) {
	return (
		<header style={{ borderBottom: "1px solid black" }}>
			<h2 style={{ textAlign: "center" }}>{title || "Untitled"}</h2>
		</header>
	);
}
