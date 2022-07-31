const express = require('express');
const router = express.Router();

module.exports = class User {
	constructor(email, username, name, password, phoneNumber) {
		this.email = email;
		this.username = username;
		this.name = name;
		this.password = this.passwordInput(password);
    this.phoneNumber = phoneNumber;
		this.UUID = this.generateUUID();
    this.creationDate = this.createDate();
    this.profilePicture = null;
    this.friendAmount = null;
    this.online = false;
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

// const user = new User("Jadd123", "Jadd", "TTVUQNPwYA&xpPfF3$#vWMf&24", "07387388582");
// // console.log(car1);
// if (user.password == undefined) {
// 	user.password = "TTVUQNPwYA&xpPfF3$#vWMf&24";
// }

// console.log(user);

