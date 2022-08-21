import { list } from "../../../store.js";
import { User } from '../../../classes/userClass.js'
import { Auth } from '../../../classes/userAuth.js';



const auth = new Auth();

let userList = [];

list.subscribe((value) => {
	userList = value;
});

export async function get({ request }) {
  const jwt = auth.checkJWT(request.headers.get("cookie"), userList)
  // console.log(jwt)
  if (!jwt) {
    return {
      status: 401,
      body: "Unauthorised"
    }
  }
  
  const user = userList.find((user) => user.email === jwt.email);

  console.log(user.username)

  if (user == undefined) {
    return { 
      status: 404, 
      body: "No user found"
    }
  }

  const newUser = {...user}

  delete newUser.password, newUser.authKey

  return {
    status: 200,
    body: user
  }
}