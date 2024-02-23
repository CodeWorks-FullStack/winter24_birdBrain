export class Watcher {
  constructor (data) {
    this.id = data.id || data._id
    this.birdId = data.birdId
    this.accountId = data.accountId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.profile = data.profile
  }
}

const watcherData = {
  "_id": "65d7c2238b6b8511000a8f91",
  "accountId": "65d7838d5bdb257d2aefc377",
  "birdId": "65d786fd5e3067727324d64f",
  "createdAt": "2024-02-22T21:52:35.969Z",
  "updatedAt": "2024-02-22T21:52:35.969Z",
  "__v": 0,
  "profile": {
    "_id": "65d7838d5bdb257d2aefc377",
    "name": "Batman",
    "picture": "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?fit=2400%2C1600&ssl=1",
    "id": "65d7838d5bdb257d2aefc377"
  },
  "id": "65d7c2238b6b8511000a8f91"
}