import { list } from '../../store.js';
let userList = [];

list.subscribe(value => {
	userList = value
});

export async function post ({ request }) {
  const req = await request.json();
  const param = req.param
  const body = req.username

  const userBool = userList.find((user) => user[param] === body);

  if (userBool !== undefined) {
    return {
      staus: 406,
      body: {param: param}
    }
  }

  else return {
    staus: 200,
    body: {param: param}
  }
} 