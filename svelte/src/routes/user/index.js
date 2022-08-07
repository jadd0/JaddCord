import { list } from "../../store.js";

let userList = [];

list.subscribe((value) => {
	userList = value;
});

export async function get({ request }) {
  console.log("hello")

  // const req = await request.json();

  console.log(request.headers.get("cookie"))

  // if(!req.authenticated) {
  //   return {
  //     status: 401,
  //     body: "Unauthorised"
  //   }
  // }
  // const user = userList.find((user) => user.email === context.email);

  // if (user == undefined) {
  //   return { 
  //     status: 404, 
  //     body: "No user found"
  //   }
  // }

  // delete user.password
  // delete user.authKey

  // return {
  //   status: 200,
  //   body: user
  // }
  
}