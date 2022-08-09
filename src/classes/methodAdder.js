export class methods {
  constructor(user) {
    this.user = JSON.parse(user);
    
  }

  login() {}

	logout() {}

	keyGenerator() {
		// this is a key for user authentication. The user will never know this key and is extremely sensitive
		// no data will ever be returned without this key

		const alphNumString =
			"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

		let key = "";

		for (let i = 0; i < 40; i++) {
			key +=
				alphNumString[Math.floor(Math.random() * alphNumString.length)];
		}

		return key;
	}

	generateJWT() {
		// TODO encrypt this locally
		return {
			email: this.email,
			password: this.password,
			authKey: this.authKey,
		};
	}

	createQRCode(UUID) {}

	createDate() {
		return new Date();
	}

	changeName(newName) {
		this.name = newName;
	}

	passwordChecker(password) {
		const regex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{10,50}$/;

		if (regex.test(password)) {
			return true;
		}
		return false;
	}

	passwordInput(password) {
		if (this.passwordChecker(password)) {
			// this.password = password;
			return password;
		} else {
			// return null;
			return password;
		}
		// this.password = password
	}

	
}