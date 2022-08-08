import { list } from '../../store.js';
import { User } from '../../classes/userClass.js'
import { Auth } from '../../classes/userAuth.js';

const auth = new Auth(User);

let userList = [];



list.subscribe(value => {
	userList = value
});

/** @type {import('./__types/[id]').RequestHandler} */
export async function post({ request }) {
	const req = await request.json();

	const returnedVal = auth.createUser({ req }, userList);

	if (returnedVal.username !== undefined) {
		return {
			status: 406,
			body: { error: "username taken" }
		}
	} else if (returnedVal.email !== undefined) {
		return {
			status: 406,
			body: { error: "email taken" }
		}
	} else if (returnedVal.phoneNumber !== undefined) {
		return {
			status: 406,
			body: { error: "phone number taken" }
		}
	}

	userList.push(returnedVal.user)
	list = [...userList]
	
	return {
		headers: {'set-cookie': `jwt=${JSON.stringify(returnedVal.user.generateJWT())}; path=/; Expires=${returnedVal.user.generateExpiry(3)}`},
		status: 200,
		body: { status: `user ${returnedVal.user.username} added to the database`}
	}
}