class User {
	constructor(username, name, password) {
		this.username = username;
		this.name = name;
		this.password = this.passwordInput(password);
		this.UUID = this.generateUUID();
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
			this.password = password;
		} else {
			return false;
		}
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

const car1 = new User("Jadd123", "Jadd", "Jadd282004");
console.log(car1);
if (car1.password == undefined) {
	car1.password = "TTVUQNPwYA&xpPfF3$#vWMf&24";
}
// car1.generateUUID();
// console.log(car1.UUID);

console.log(car1);

car1.passwordInput("Jaddd");
console.log(car1);
// User.name = "John";
// console.log(User);
