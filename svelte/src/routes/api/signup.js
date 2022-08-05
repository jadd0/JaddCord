import { User } from "./userClass.js";
import { list } from "../api/users";

/** @type {import('./__types/[id]').RequestHandler} */
export async function post({ request }) {
	const req = await request.json();

  console.log(req)

	const user = new User(
		req.email,
		req.username,
		req.name,
		req.password,
		req.phoneNumber
	);

	const username = list.find((user) => user.username === req.username);
	const email = list.find((user) => user.email === req.email);
	const phoneNumber = list.find(
		(user) => user.phoneNumber === req.phoneNumber
	);

	if (username !== undefined) {
		return {
			status: 406,
			body: { error: "username taken" }
		}
	} else if (email !== undefined) {
		return {
			status: 406,
			body: { error: "email taken" }
		}
	} else if (phoneNumber !== undefined) {
		return {
			status: 406,
			body: { error: "phone number taken" }
		}
	}

	list.push(user);
	console.log(list);

	return {
		status: 200,
		body: { status: `user ${username} added to the database`}
	}
}
