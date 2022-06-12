export function Navbar() {
	return (
		<nav
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				maxWidth: 900,
				margin: "0 auto",
			}}
		>
			<h1 style={{ marginLeft: 8 }}>ACME Inc.</h1>
			<ul
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					listStyle: "none",
				}}
			>
				<li style={{ margin: "0 8px" }}>
					<a href="#">Home</a>
				</li>
				<li style={{ margin: "0 8px" }}>
					<a href="#">About</a>
				</li>
				<li style={{ margin: "0 8px" }}>
					<a href="#">Blog</a>
				</li>
				<li style={{ margin: "0 8px" }}>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	);
}
