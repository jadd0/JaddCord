export class FriendList {
  constructor(CreateFriend) {
    this.list = []
    this.CreateFriend = CreateFriend;
  }

  #findFriend(username, userList) {
    const user = userList.find((user) => user.username === username);

    return user.UUID
  }

  addFriend(username, userList) {
    // TODO check if user exists
    // TODO check that not already added
    // const uuid = this.#findFriend(username)
    
    const friend = new this.CreateFriend(username, userList)

    this.list.push(friend)

    console.log(this.list)
  }

  deleteFriend() {

  }

  blockFriend() {
    
  }
}