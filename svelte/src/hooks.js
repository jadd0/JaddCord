import { list } from "./store.js";
import { loginSys } from "./routes/api/login.js";

let userList = [];

list.subscribe((value) => {
	userList = value;
});

export const getSession = (event) => {
	const cookie = event.request.headers.get("cookie");

	const jwt = user.checkJWT(cookie);

  if (!jwt) {
    return {
      authenticated: false
    }
  }

	const user = loginSys(jwt.email, jwt.password);

	if (user != false) {
		if (user.authKey == jwt.authKey) {
			console.log("logged in");
			return {
				authenticated: true,
				name: user.name,
			};
		}
	}
	console.log("unauthenticated");
	return {
		authenticated: false,
	};
};
