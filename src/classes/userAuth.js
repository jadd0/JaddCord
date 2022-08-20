export class Auth {
	constructor(User) {
		this.User = User;
	}

	checkJWT(cookieList, userList) {
		let jwt = "";
		try {
			cookieList = cookieList.split("; ");
			const result = {};

			for (let i in cookieList) {
				const cur = cookieList[i].split("=");
				result[cur[0]] = cur[1];
			}

			jwt = JSON.parse(result.jwt);
		} catch {
			return false;
		}

		const user = this.login(jwt.email, jwt.password, userList);

		if (user.authKey != jwt.authKey) return false;

		return user;
	}

	login(email, password, userList) {
		const user = userList.find((user) => user.email === email);


		if (user !== undefined) {
			if (user.password === password) {
				// console.log(email + " logged in successfully");

				// if the username and password are correct
				return user;
			}
			// if the password is incorrect, but email is correct
			return false;
		}
		// if there is no user associated with the email
		return false;
	}

	createUser({ req }, { obj }) {
		const user = new this.User(
			obj.FriendList,
			obj.CreateFriend,
			req.email,
			req.username,
			req.name,
			req.password,
			req.phoneNumber
		);
    
		const username = obj.userList.find((user) => user.username === req.username);
		const email = obj.userList.find((user) => user.email === req.email);
		const phoneNumber = obj.userList.find((user) => user.phoneNumber === req.phoneNumber);

		return {
			user: user,
			username: username,
			email: email,
			phoneNumber: phoneNumber,
		};
	}

	generateExpiry(days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

		return date;
	}

	generateCookie(user, days) {
		const jwt = user.generateJWT();

		const cookie = `jwt=${JSON.stringify(jwt)}; path=/; Expires=${this.generateExpiry(3)}; HostOnly=false; Secure=lax`;

		return cookie;
	}
}
