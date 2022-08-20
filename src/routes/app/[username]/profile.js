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
  console.log("benfne")
  console.log(params)
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

  console.log(user.name)


  return {
    status: 200,
    body: {user: user}
  }
  // if (params.slug === 'hello-world') {
  //   return {
  //     title: 'Hello world!',
  //     content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
  //   };
  // }
 
  // throw error(404, 'Not found');
}