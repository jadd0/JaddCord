/** @type {import('./__types/[id]').RequestHandler} */
import { list } from '../../store.js';
import { auth } from './userAuth.js'


let userList = [];

list.subscribe(value => {
	userList = value
});

export async function post({ request }) {
	const req = await request.json();

	const email = req.email;
	const password = req.password;

	const user = auth.login(email, password)

	if (user != false) {
		const jwt = user.generateJWT();

		return {
			headers: {'set-cookie': `jwt=${JSON.stringify(user.generateJWT())}; path=/; Expires=${user.generateExpiry(3)}`},
			status: 200,
			// body: jwt,
		};
	}

	return {
		status: 401,
		body: { error: "wrong password" }
	};
}