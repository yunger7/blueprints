// import { users } from "../../data";
import { users } from "data";

export function getUser(id) {
	if (!id) return null;

	const results = users.filter(user => user.id == id);

	if (results.length) {
		return results[0];
	}

	return null;
}
