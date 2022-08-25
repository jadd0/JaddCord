import { list } from "../../store.js";
let userList = [];

list.subscribe((value) => {
	userList = value;
});

export async function post({ request }) {
	const req = await request.json();
	const params = req.params;
	const body = req.body;

  console.log(params, body)
  

	const user = userList.find((user) => user[params] === body);

	console.log(user);
	if (user == undefined) {
		return {
			staus: 200,
			body: { param: params },
		};
	}
        
	return {
		status: 406,
		body: { param: params },
	};
}
