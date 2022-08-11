import { Auth } from '../../classes/userAuth.js';
import { User } from '../../classes/userClass.js';
import { list } from '../../store.js'

const auth = new Auth(User)

let userList = [];

list.subscribe(value => {
	userList = value
});

export async function post({ request }) {
  const req = await request.json();
  const user = auth.checkJWT(request.headers.get("cookie"), userList)

  if (!user) {
    return {
      status: 401,
      body: "Unauthorised"
    }
  }

  console.log(user.FriendList)
  user.FriendList.addFriend(req.username, userList)
}