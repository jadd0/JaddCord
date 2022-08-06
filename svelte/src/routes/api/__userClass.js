export class User {
	constructor(email, username, name, password, phoneNumber) {
		this.email = email;
		this.username = username;
		this.name = name;
		this.password = this.passwordInput(password);
    this.phoneNumber = phoneNumber;
		this.UUID = this.generateUUID();
		this.QRCode = this.createQRCode(this.UUID);
    this.creationDate = this.createDate();
    this.profilePicture = null;
    this.friendAmount = null;
    this.online = false;
		this.authKey = this.keyGenerator();
	}

	keyGenerator() {
		// this is a key for user authentication. The user will never know this key and is extremely sensitive
		// no data will ever be returned without this key

		const alphNumString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!£$%^*@<,>.?/|#~'

		let key = ''

		for(let i = 0; i < 40; i++){
			key += alphNumString[Math.floor(Math.random() * 78)]
		}

		return key
	}

	generateJWT() {
	// TODO encrypt this locally
		return {
			username: this.username,
			password: this.password,
			authKey: this.authKey
		}
	}

	createQRCode(UUID) {
		
	}

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
			return password
		} 
		else {
			// return null;
			return password
		}
		// this.password = password
	}

	generateCookie() {
		const jwt = this.generateJWT();

		const days = 3;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); 
		
		const cookie = `jwt=${JSON.stringify(jwt)}; expires=${date.toUTCString()}; SameSite=lax`;

		return cookie
	}

	generateUUID() {
		var d = new Date().getTime();
		var d2 =
			(typeof performance !== "undefined" &&
				performance.now &&
				performance.now() * 1000) ||
			0;
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				var r = Math.random() * 16; //random number between 0 and 16
				if (d > 0) {
					//Use timestamp until depleted
					r = (d + r) % 16 | 0;
					d = Math.floor(d / 16);
				} else {
					//Use microseconds since page-load if supported
					r = (d2 + r) % 16 | 0;
					d2 = Math.floor(d2 / 16);
				}
				return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
			}
		);
	}
}