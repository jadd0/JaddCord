import { list } from "./store.js";
import { loginSys } from "./routes/api/login.js";

let userList = [];

list.subscribe((value) => {
	userList = value;
});

function parseCookie(cookie) {
	try {
		cookie = cookie.split("; ");
		const result = {};

		for (let i in cookie) {
			const cur = cookie[i].split("=");
			result[cur[0]] = cur[1];
		}

    return JSON.parse(result.jwt);
	} 
  catch {
    return false
  }
	
}

export const getSession = (event) => {
	const cookie = event.request.headers.get("cookie");

	const jwt = parseCookie(cookie);

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
