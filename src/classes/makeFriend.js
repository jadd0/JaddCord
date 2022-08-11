// No need to check if user exists, will do that before calling this class

export class CreateFriend {
  constructor(username, list) {
    this.username = null;
    this.name = null;
    this.qrcode = null;
    this.profilePicture = null;

    this.friendSince = this.#getToday();

    this.#getFriend(username, list)
  }

  #getToday() {
    return new Date();
  }

  #getFriend(username, list) {
    const user = list.find((user) => user.username === username);

    
    this.username = user.username
    this.name = user.name
    this.qrcode = user.qrcode
    this.profilePicture = user.profilePicture
  }
}