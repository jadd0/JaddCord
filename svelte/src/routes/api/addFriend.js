export async function get({ request }) {
  const jwt = auth.checkJWT(request.headers.get("cookie"), userList)

  if (!jwt) {
    return {
      status: 401,
      body: "Unauthorised"
    }
  }

  
}