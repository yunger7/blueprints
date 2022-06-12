// import { Navbar } from "../components/Navbar";
// import { Container } from "../components/Container";
// import { Header } from "../components/Header";
// import Footer from "../components/Footer";
// import { useMockText } from "../hooks/useMockText";

import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useMockText } from "@/hooks/useMockText";

// Check `src/pages/api/v1/users/[id]` for an example with a deeply nested import

export default function HiMom() {
	const { generateText } = useMockText();

	return (
		<>
			<Navbar />
			<Container>
				<Header title="Hi mom" />
				{generateText(4)}
			</Container>
			<Footer />
		</>
	);
}
