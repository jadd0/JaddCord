// This class creates a friend based on the uuid entered, and checks the userList
export class CreateFriend {
  constructor(uuid, list) {
    this.username = null;
    this.name = null;
    this.qrcode = null;
    this.profilePicture = null;

    this.friendSince = this.#getToday();


    // INIT user
    this.#getFriend(uuid, list)
  }

  // Returns the date the friend was added
  #getToday() {
    return new Date();
  }

  #getFriend(UUID, list) {
    const user = list.find((user) => user.UUID === UUID);
    
    // If no user if found, it returns and keeps user details as null to show there is no user
    if (user == undefined) return
    
    // If a user is found, it populates the object with the user details
    this.username = user.username
    this.name = user.name
    this.UUID = user.UUID
    this.qrcode = user.qrcode
    this.profilePicture = user.profilePicture
  }
}