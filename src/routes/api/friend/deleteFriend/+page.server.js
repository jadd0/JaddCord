throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

// Endpoint to add a friend

// INIT
import { Auth } from "../../../../classes/userAuth.js";
import { User } from "../../../../classes/userClass.js";
import { list } from "../../../../store.js";

const auth = new Auth(User);

let userList = [];

list.subscribe((value) => {
	userList = value;
});

// Endpoint
export async function post({ request }) {
	// Checks the JWT to authenticate
	const user = auth.checkJWT(request.headers.get("cookie"), userList);

	// Returns 401 if the user is not authorized
	if (!user) {
		return {
			status: 401,
			body: "Unauthorised",
		};
	}

  user.profilePicture = 'BBALL.png'

  console.log(user)

	// Parses data and gets the username of user to add
	const req = await request.json();
	// console.log(user.username);

	// Doesn't let you add yourself, returns a 404
	if (user.username == req.username) {
		return {
			status: 404,
			body: "You cannot delete yourself, lonely",
		};
	}

	// Tries to add user, if successful returns the username, else returns false
	// console.log(req.username, user.username);

	const friend = user.FriendList.deleteFriend(
		req.username,
		userList,
		user.username
	);

  // console.log(friend)

	// Retuns a 404 to say no user is found
	if (!friend) {
		return {
			status: 404,
			body: "No user found",
		};
	}
  
	const userB = userList.find((user) => user.username === req.username);

  console.log("USERB", userB)

	userB.FriendList.deleteFriend(user.username, userList);

	// Else, retuns OK to indicate the friend was added and the username as a conformation
	return {
		status: 200,
		body: `User deleted successfully`,
	};
}
