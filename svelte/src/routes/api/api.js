/** @type {import('./__types/[id]').RequestHandler} */
export async function post({ request }) {
	const reqbody = await request.json();

	const email = reqbody.one;
	const password = reqbody.two;

	console.log(reqbody)

	return {
		status: 200,
		headers: {},
		body: { email, password },
	};
}