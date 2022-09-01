throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import { list } from '../../../store.js';
import { User } from '../../../classes/userClass.js'
import { Auth } from '../../../classes/userAuth.js';
import { FriendList } from '../../../classes/friendList.js'
import { CreateFriend } from '../../../classes/makeFriend.js';

const auth = new Auth(User);

let userList = [];

list.subscribe(value => {
	userList = value
});


/** @type {import('./$types').RequestHandler} */
export async function post({ request }) {
	const req = await request.json();
	const obj = {
		FriendList: FriendList,
		userList: userList,
		CreateFriend: CreateFriend
	}
	const returnedVal = auth.createUser({ req }, { obj });

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
	list.set([...userList])

	// console.log(returnedVal.user)
	
	return {
		headers: {'set-cookie': auth.generateCookie(returnedVal.user, 3)},
		status: 200,
		body: { status: `user ${returnedVal.user.username} added to the database`}
	}
}