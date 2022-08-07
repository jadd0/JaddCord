import { User } from "./userClass.js";
import { list } from '../../store.js';

let userList = [];

list.subscribe(value => {
	userList = value
});

/** @type {import('./__types/[id]').RequestHandler} */
export async function post({ request }) {
	const req = await request.json();

	const user = new User(
		req.email,
		req.username,
		req.name,
		req.password,
		req.phoneNumber
	);
	console.log(userList)
	const username = userList.find((user) => user.username === req.username);
	const email = userList.find((user) => user.email === req.email);
	const phoneNumber = userList.find(
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

	// count.update(n => n + 1);
	userList.push(user)
	list = [...userList]

	return {
		headers: {'set-cookie': JSON.stringify(user.generateCookie())},
		status: 200,
		body: { status: `user ${user.username} added to the database`}
	}
}