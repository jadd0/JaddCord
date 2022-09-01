throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

/** @type {import('./$types').RequestHandler} */
import { list } from '../../../store.js';
import { User } from '../../../classes/userClass.js'
import { Auth } from '../../../classes/userAuth.js';

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
				'set-cookie': auth.generateCookie(user, 3),
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