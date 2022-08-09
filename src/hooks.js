import { list } from "./store.js";
import { Auth } from "./classes/userAuth.js";
import { User } from "./classes/userClass.js";

const auth = new Auth(User);

let userList = [];

list.subscribe((value) => {
	userList = value;
});

export const getSession = (event) => {
	const cookie = event.request.headers.get("cookie");

	const user = auth.checkJWT(cookie, userList);


	if (!user) {
		return {
			authenticated: false,
		};
	}

	return {
		authenticated: true,
		name: user.email,
	};
};
