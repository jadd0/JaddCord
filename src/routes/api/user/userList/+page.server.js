throw new Error("@migration task: Update +server.js (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");

import { list } from "../../../../store.js";
import { User } from '../../../../classes/userClass.js'
import { Auth } from '../../../../classes/userAuth.js';



const auth = new Auth();

let userList = [];

list.subscribe((value) => {
	userList = value;
});

export async function post({ request }) {
  const jwt = auth.checkJWT(request.headers.get("cookie"), userList)
  // console.log("heeeifdj", jwt)
  if (!jwt) {
    return {
      status: 401,
      body: "Unauthorised"
    }
  }
  
  const req = await request.json()
  // console.log(req)
  // todo first 10 users matching


  const copy = [...userList]


  const items = copy
    .filter(user => user.username.indexOf(req.query) !== -1)
    .map(a => a.username);
  // console.log(items)

  return {
    status: 200,
    body: {users: items}
  }
}