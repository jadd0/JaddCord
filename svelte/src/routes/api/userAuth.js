class auth {
	constructor() {
		this.user = user;
	}

	checkJWT(cookieList) {
		const jwt = "";
		try {
			cookieList = cookie.split("; ");
			const result = {};

			for (let i in cookieList) {
				const cur = cookieList[i].split("=");
				result[cur[0]] = cur[1];
			}

			jwt = JSON.parse(result.jwt);
		} catch {
			return false;
		}

		if (user.jwt != jwt) return false;

		return jwt;
	}

	login(email, password) {
		const user = userList.find((user) => user.email === email);

		if (user !== undefined) {
			if (user.password === password) {
				console.log(email + " logged in successfully");

				// user.keyGenerator();

				// if the username and password are correct
				return user;
			}
			// if the password is incorrect, but email is correct
			return false;
		}
		// if there is no user associated with the email
		return false;
	}

	createUser() {
    
  }
}
