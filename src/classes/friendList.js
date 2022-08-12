// This class is called each time a user is made
export class FriendList {
	constructor(CreateFriend) {
		// This is the actual list of friends
		this.list = [];
		// This is the class to create a friend
		this.CreateFriend = CreateFriend;
	}

	// Finds the uuid of a user based on the username
	#findFriend(username, userList) {
		const user = userList.find((user) => user.username === username);

		// If no user exists, returns false
		if (user == undefined) return false;

		return user.UUID;
	}

	addFriend(username, userList) {
		// TODO check if user exists
		// TODO check that not already added
		const uuid = this.#findFriend(username, userList);

		console.log(uuid);

		if (!uuid) return false;

		const friend = new this.CreateFriend(uuid, userList);

		// If (friend.username == null) return false

		// Adds the friend to the list and returns the username as conformation
		this.list.push(friend);
		console.log(this.list);
		return friend.username;
	}

	// Deletes the friend from the list of friends
	deleteFriend(username) {
		// Gets the uuid of the friend, if the friend exists retuns the uuid, else returns false
		const uuid = this.#findFriend(username);

		// If no user exists with username, returns false
		if (!uuid) return false;

		// Removes all occurances of the friend from the list
		this.list = this.list.filter(function (user) {
			return user.uuid != uuid;
		});

		return true;
	}

	// TODO when develop friend OOP more
	blockFriend() {}
}
