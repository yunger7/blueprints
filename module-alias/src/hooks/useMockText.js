export function useMockText() {
	function generateMockText(n = 1) {
		return [...Array(n).keys()].map(i => (
			<p key={i}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
				exercitationem explicabo provident quisquam. Maxime tempora ipsum
				debitis voluptas nulla fuga neque officiis. Totam ducimus amet debitis
				eum mollitia voluptate odit? Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Ipsum magni, quo culpa doloremque, est nisi, soluta
				magnam fuga explicabo expedita quam delectus omnis id? Deleniti facere
				itaque harum omnis recusandae!
			</p>
		));
	}

	return {
		generateText: generateMockText,
	};
}
