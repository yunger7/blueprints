import { useState, useEffect } from "react";

// import { getRandomInt } from "../lib/getRandomInt";
import { getRandomInt } from "@/lib/getRandomInt";

export function useMockUser() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null);

	async function getUser(signal) {
		const id = getRandomInt(1, 5);

		try {
			const response = await fetch(`/api/v1/users/${id}`, { signal });

			if (response.status !== 200) {
				throw new Error();
			}

			const user = await response.json();
			setUser(user);
		} catch (error) {
			setError(true);
		}

		setLoading(false);
	}

	useEffect(() => {
		const abortController = new AbortController();

		getUser(abortController.signal);

		return () => abortController.abort();
	}, []);

	return {
		loading,
		error,
		user,
	};
}
