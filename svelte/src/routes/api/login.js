/** @type {import('./__types/[id]').RequestHandler} */
import { list } from '../../store.js';
import { User } from '../../classes/userClass.js'
import { Auth } from '../../classes/userAuth.js';

const auth = new Auth(User);

let userList = [];

list.subscribe(value => {
	userList = value
});

export async function post({ request }) {
	const req = await request.json();

	const email = req.email;
	const password = req.password;

	const user = auth.login(email, password, userList)


	if (user != false) {
		const jwt = user.generateJWT();

		return {
			headers: {
				'set-cookie': `jwt=${JSON.stringify(jwt)}; path=/; Expires=${user.generateExpiry(3)}`,
				Location : '/protected'
		},
			status: 200,
			body: "success",
		};
	}

	return {
		status: 401,
		body: { error: "wrong password" }
	};
}