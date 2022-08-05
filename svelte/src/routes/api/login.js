import { list } from "../api/users";
/** @type {import('./__types/[id]').RequestHandler} */

export async function post({ request }) {
	const req = await request.json();

	const email = req.email;
	const password = req.password;

	const user = list.find((user) => user.email === email);

	if (user !== undefined) {
		if (user.password === password) {
			console.log(email + " logged in successfully");

			user.keyGenerator();

			// const cookieObj = JSON.parse('{"id":1,"value":"code.google.com"}');

			// res.cookie("details", cookieObj);
      return {
        status: 200,
        body: { status: `user ${user.username} logged in successfully` }
      }
		} else {
			return {
				status: 401,
				body: { error: "wrong password" },
			};
		}
	} else {
		return {
			status: 401,
			body: { error: "wrong email" },
		};
	}
}
