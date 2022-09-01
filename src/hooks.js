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
	console.log(resolve(event))
	const isApp = event.request.url.split('/')[3] === 'app';
	// console.log(event.request.url)
	// console.log(isApp)
	const isGet = event.request.method === 'GET';
	const response = await resolve(event)
	// console.log(isGet)
	// console.log(isApp)
	// console.log(response)
	// return response
	if (!isApp) {
		return response
	}

	const cookie = event.request.headers.get("cookie");
	// console.log(cookie)
	const user = auth.checkJWT(cookie, userList);

	// console.log("hello", user)
	if (!user && isGet) {
		return new Response('Redirect', {status: 303, headers: { Location: '/login' }})
	}
	

	// console.log(response)
	return response
}