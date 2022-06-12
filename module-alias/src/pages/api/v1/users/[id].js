// import { getUser } from "../../../../lib/getUser";
import { getUser } from "@/lib/getUser";

export default function handler(request, response) {
	const { id } = request.query;

	const user = getUser(id);

	if (!user) {
		return response
			.status(404)
			.json({ message: `User with id '${id}' was not found` });
	}

	return response.status(200).json(user);
}
