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

  get BirdCardHTMLTemplate() {
    return `
    <div class="col-md-3">
      <div class="border border-dark rounded shadow">
        <img class="bird-img"
          src="${this.imgUrl}"
          alt="${this.name}">

        <div class="p-3 d-flex justify-content-between align-items-center">
          <div>
            <p class="fs-4 fw-bold">${this.name}</p>
            <p class="fs-4">👀 0</p>
          </div>
          <img class="creator-picture"
            src="https://images.unsplash.com/photo-1544819576-82e8d26e7d22?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Happy G-PA">
        </div>
      </div>
    </div>
    `
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