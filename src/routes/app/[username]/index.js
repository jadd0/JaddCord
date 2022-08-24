import { Auth } from '../../../classes/userAuth.js'
import { User } from '../../../classes/userClass.js'
import { list } from '../../../store.js'

const auth = new Auth(User);

let userList = [];

list.subscribe((value) => {
	userList = value;
});

/** @type {import('./$types').PageLoad} */
export function get({ request, params }) {
  // console.log("benfne")
  // console.log(params)
  const jwt = auth.checkJWT(request.headers.get("cookie"), userList)

  if (!jwt) {
    return {
      status: 401,
      body: "Unauthorised"
    }
  }
 
  const user = userList.find((user) => user.username === params.username);

  if (user == undefined) return {
    status: 400,
    body: {error: "No user found"}
  }

  else if (user.UUID == jwt.UUID) {
    return {
      status: 302,
			headers: {location: "/app/profile"},
    }
  }

  // console.log(jwt.FriendList.list)
  const isFriend = (jwt.FriendList.list).find((user) => user.username === params.username);
  let friendBool = false

  isFriend === undefined ? pass : friendBool = true;
  

  return {
    status: 200,
    body: {user: user, friendBool: friendBool}
  }
}