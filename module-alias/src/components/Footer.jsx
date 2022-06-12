// import { getCurrentYear } from "../lib/getCurrentYear";
import { getCurrentYear } from "@/lib/getCurrentYear";

export default function Footer() {
	return (
		<footer style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
			<p>&copy; {getCurrentYear()} ACME Inc.</p>
		</footer>
	);
}
