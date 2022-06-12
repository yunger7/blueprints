export default function Footer() {
	return (
		<footer style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
			<p>&copy; {new Date().getFullYear()} ACME Inc.</p>
		</footer>
	);
}
