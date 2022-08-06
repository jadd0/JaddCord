import { User } from "./__userClass.js";

const list = [];

/** @type {import('./__types/[id]').RequestHandler} */
export async function post({ request }) {
	const req = await request.json();

  console.log(req)

	const user = new User(
		req.email,
		req.username,
		req.name,
		req.password,
		req.phoneNumber
	);

	const username = list.find((user) => user.username === req.username);
	const email = list.find((user) => user.email === req.email);
	const phoneNumber = list.find(
		(user) => user.phoneNumber === req.phoneNumber
	);

	if (username !== undefined) {
		return {
			status: 406,
			body: { error: "username taken" }
		}
	} else if (email !== undefined) {
		return {
			status: 406,
			body: { error: "email taken" }
		}
	} else if (phoneNumber !== undefined) {
		return {
			status: 406,
			body: { error: "phone number taken" }
		}
	}

	list.push(user);
	console.log(list);

	return {
		status: 200,
		body: { status: `user ${user.username} added to the database`}
	}
}


function loginSys(email, password) {
  const user = list.find((user) => user.email === email);
  
  if (user !== undefined) {
    if (user.password === password) {
      console.log(email + " logged in successfully");
  
      user.keyGenerator();
      
      // if the username and password are correct
      return user
    } 
    // if the password is incorrect, but email is correct
    return false
  } 
  // if there is no user associated with the email
  return false
}

export async function put({ request }) {
	
	const req = await request.json();

	const email = req.email;
	const password = req.password;

	const user = loginSys(email, password)

	if (user != false) {
		const jwt = user.generateJWT();

		return {
			headers: {'set-cookie': [user.generateCookie()]},
			status: 200,
			body: jwt,
		};
	}

	return {
		status: 401,
		body: { error: "wrong password" }
	};
}
