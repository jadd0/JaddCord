// This class creates a friend based on the uuid entered, and checks the userList
// Takes in own username to add to friend's friend list
export class CreateFriend {
	constructor(user) {
		this.name = user.name;
		this.UUID = user.UUID;
		this.friendSince = this.#getToday();

		// INIT user

		// this.#getFriend(user, list);
	}

	// Returns the date the friend was added
	#getToday() {
		return new Date();
	}

	// #getFriend(user, list) {
	// 	// If no user if found, it returns and keeps user details as null to show there is no user
	// 	if (user == undefined) return;

	// 	// If a user is found, it populates the object with the user details
	// 	this.username = user.username;
	// 	this.name = user.name;
	// 	this.UUID = user.UUID;
	// 	this.qrcode = user.qrcode;
	// 	this.profilePicture = user.profilePicture;
	// }
}
