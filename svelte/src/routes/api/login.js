// import jwt from "../api/jwt";

import { list } from "./signup"

console.log(list)

function loginSys(email, password) {
	// const list = await getList()

	console.log(list)

  const user = list.find((user) => user.email === email);
  
  if (user !== undefined) {
    if (user.password === password) {
      console.log(email + " logged in successfully");
  
      user.keyGenerator();
      
      // if the username and password are correct
      return true
    } 
    // if the password is incorrect, but email is correct
    return false
  } 
  // if there is no user associated with the email
  return false
}



	/** @type {import('./__types/[id]').RequestHandler} */
export async function post({ request }) {
	const req = await request.json();

	const email = req.email;
	const password = req.password;

	if (loginSys(email, password)) {
		const jwt = user.generateJWT();

		return {
			status: 200,
			body: jwt,
		};
	}

	return {
		status: 401,
		body: { error: "wrong password" }
	};
}
