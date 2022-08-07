import { list } from "../../store.js";
import { Auth } from '../api/userAuth.js'

const auth = new Auth();

let userList = [];

list.subscribe((value) => {
	userList = value;
});

export async function get({ request }) {
  const jwt = auth.checkJWT(request.headers.get("cookie"))

  if (!jwt) {
    return {
      status: 401,
      body: "Unauthorised"
    }
  }

  const user = userList.find((user) => user.email === jwt.email);

  if (user == undefined) {
    return { 
      status: 404, 
      body: "No user found"
    }
  }

  delete user.password, user.authKey

  return {
    status: 200,
    body: user
  }
}