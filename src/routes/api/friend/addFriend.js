// Endpoint to add a friend

// INIT
import { Auth } from '../../../classes/userAuth.js';
import { User } from '../../../classes/userClass.js';
import { list } from '../../../store.js'

const auth = new Auth(User)

let userList = [];

list.subscribe(value => {
	userList = value
});


// Endpoint
export async function post({ request }) {
  // Checks the JWT to authenticate
  const user = auth.checkJWT(request.headers.get("cookie"), userList)

  // Returns 401 if the user is not authorized
  if (!user) {
    return {
      status: 401,
      body: "Unauthorised"
    }
  }

  // Parses data and gets the username of user to add
  const req = await request.json();
  console.log(user.username)

  // Doesn't let you add yourself, returns a 404
  if (user.username == req.username) {
    return {
      status: 404,
      body: "You cannot add yourself, lonely"
    }
  }

  // Tries to add user, if successful returns the username, else returns false
  console.log(req.username, user.username)
  const res = user.FriendList.addFriend(req.username, userList, user.UUID);

  

  // Retuns a 404 to say no user is found
  if (!res) {
    return {
      status: 404,
      body: "No user found"
    }
  }

  // Else, retuns OK to indicate the friend was added and the username as a conformation
  return {
    status: 200,
    body: `User ${res} added successfully`
  }
}