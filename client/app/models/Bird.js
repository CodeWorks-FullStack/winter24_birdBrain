export class Bird {
  constructor (data) {
    this.id = data.id || data._id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.location = data.location
    this.description = data.description || ''
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}

const birdData = {
  "_id": "65d786fd5e3067727324d64f",
  "name": "The Boy Wonder",
  "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gnvtiF4xRH-ggQefOKbeSi7ZLot7PZC8nA&usqp=CAU",
  "location": "By Jeremy House",
  "description": "",
  "creatorId": "65d7838d5bdb257d2aefc377",
  "createdAt": "2024-02-22T17:40:13.264Z",
  "updatedAt": "2024-02-22T17:40:13.264Z",
  "__v": 0,
  "id": "65d786fd5e3067727324d64f"
}