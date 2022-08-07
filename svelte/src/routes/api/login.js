/** @type {import('./__types/[id]').RequestHandler} */
import { list } from '../../store.js';

let userList = [];

list.subscribe(value => {
	userList = value
});


export function loginSys(email, password) {
  const user = userList.find((user) => user.email === email);
  
  if (user !== undefined) {
    if (user.password === password) {
      console.log(email + " logged in successfully");
  
      // user.keyGenerator();
      
      // if the username and password are correct
      return user
    } 
    // if the password is incorrect, but email is correct
    return false
  } 
  // if there is no user associated with the email
  return false
}

export async function post({ request }) {
	
	const req = await request.json();

	const email = req.email;
	const password = req.password;

	const user = loginSys(email, password)

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