import { list } from "./store.js";
import { Auth } from "./classes/userAuth.js";
import { User } from "./classes/userClass.js";

const auth = new Auth(User);

let userList = [];




list.subscribe((value) => {
	userList = value;
});

// export const getSession = (event) => {
// 	console.log("hello")
// 	console.log(event.request3)
// 	const cookie = event.request.headers.get("cookie");

// 	const user = auth.checkJWT(cookie, userList);


// 	if (!user) {
// 		return {
// 			authenticated: false,
// 		};
// 	}

// 	return {
// 		authenticated: true,
// 		name: user.email,
// 		// status: 200
// 	};
// };

// if app and not auth, redirect

export const handle = async ({ event, resolve}) => {
	const isApp = event.url.pathname.startsWith('/app')
	const response = await resolve(event)

	if (!isApp) {
		return response
	}

	const cookie = event.request.headers.get("cookie");
	console.log(cookie)
	const user = auth.checkJWT(cookie, userList);

	console.log(user)
	if (!user) {
		return new Response('Redirect', {status: 303, headers: { Location: '/login' }})
	}

	console.log(response)
	return response
}
