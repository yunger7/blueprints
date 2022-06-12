// import { Navbar } from "../components/Navbar";
// import { Container } from "../components/Container";
// import { Header } from "../components/Header";
// import Footer from "../components/Footer";

import { Navbar, Container, Header, Footer } from "../components";

export default function HiMom() {
	return (
		<>
			<Navbar />
			<Container>
				<Header title="Hi mom" />
				{[...Array(4).keys()].map(i => (
					<p key={i}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
						exercitationem explicabo provident quisquam. Maxime tempora ipsum
						debitis voluptas nulla fuga neque officiis. Totam ducimus amet
						debitis eum mollitia voluptate odit? Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Ipsum magni, quo culpa doloremque, est
						nisi, soluta magnam fuga explicabo expedita quam delectus omnis id?
						Deleniti facere itaque harum omnis recusandae!
					</p>
				))}
			</Container>
			<Footer />
		</>
	);
}
