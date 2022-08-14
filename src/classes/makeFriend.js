// This class creates a friend based on the uuid entered, and checks the userList
// Takes in own username to add to friend's friend list
export class CreateFriend {
  constructor(uuid, list, myUsername) {
    this.username = null;
    this.name = null;
    this.qrcode = null;
    this.profilePicture = null;

    this.friendSince = this.#getToday();


    // INIT user
    this.#getFriend(uuid, list, myUsername)
  }

  // Returns the date the friend was added
  #getToday() {
    return new Date();
  }

  #getFriend(UUID, list, myUUID) {
    // if (myUUID != undefined) {
    //   const user = list.find((user) => user.myUUID === myUUID);
    // }
    // // else {
      const user = list.find((user) => user.UUID === UUID);
    // }
    
    // If no user if found, it returns and keeps user details as null to show there is no user
    if (user == undefined) return
    
    // If a user is found, it populates the object with the user details
    this.username = user.username
    this.name = user.name
    this.UUID = user.UUID
    this.qrcode = user.qrcode
    this.profilePicture = user.profilePicture

    if (myUsername == undefined) return
    console.log(myUsername)
    // this.#addToTheirFriendList(user, list, myUsername)
  }

  #addToTheirFriendList(user, list, myUsername) {
    user.FriendList.addFriend(myUsername, list)
  }
}