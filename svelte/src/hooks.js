import { list } from "./store.js";
import { loginSys } from "./routes/api/login.js";
import { Auth } from "./routes/api/userAuth.js";
import { User } from "./routes/api/userClass.js";

const auth = new Auth(User);

let userList = [];

list.subscribe((value) => {
	userList = value;
});

export const getSession = (event) => {
	const cookie = event.request.headers.get("cookie");

	const jwt = auth.checkJWT(cookie, userList);

	console.log(jwt);

	if (!jwt) {
		return {
			authenticated: false,
		};
	}

	return {
		authenticated: true,
		name: jwt.name,
	};
};
