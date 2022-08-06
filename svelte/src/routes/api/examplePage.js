/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ request }) {
	console.log(request.headers.get("cookie"))
	// return {
	// 	status: 200,
	// 	headers: {},
	// 	body: { email, password },
	// };
}