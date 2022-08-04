/** @type {import('./__types/[id]').RequestHandler} */
export async function post({ request }) {
	console.log(request)
	// `params.id` comes from [id].js
	// const item = "jadd";
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