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
    this.watchersCount = data.watchersCount
    this.creator = data.creator
  }

  get BirdCardHTMLTemplate() {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div onclick="app.BirdsController.setActiveBird('${this.id}')" class="border border-dark border-3 rounded bird-card selectable" data-bs-toggle="modal" data-bs-target="#exampleModal" role="button" title="See details about ${this.name}">
        <div class="bg-dark">
          <img class="bird-img rounded-top"
            src="${this.imgUrl}"
            alt="${this.name}">
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center border-top border-dark">
          <div>
            <p class="fs-4 fw-bold">${this.name}</p>
            <p class="fs-4">👀 ${this.watchersCount}</p>
          </div>
          <img class="creator-picture"
            src="${this.creator.picture}"
            alt="${this.creator.name}" title="${this.creator.name} is the original spotter of ${this.name}">
        </div>
      </div>
    </div>
    `
  }

  get ActiveDetailsHTMLTemplate() {
    return `
    <div class="container-fluid">
      <section class="row bird-details-section">
        <div class="col-md-4 bird-details-card">
          <h1>Pigeon</h1>
          <p>In the park, a bird, swift and stealthy, seized food with eerie precision. A revelation struck this
            wasn't nature's whimsy, but a government drone disguised.

            Each stolen crumb hinted at covert surveillance. The tranquil park now echoed with the sinister dance of
            espionage, leaving me unsettled in a reality where innocence and intrusion collided.</p>
          <p>Seen on 12/12/2012 at 10:35PM</p>
        </div>
      </section>

      <section class="row">
        <div class="col-12">
          <h2>0 Watchers</h2>
          <div class="d-flex">
            <img class="creator-picture mx-1"
              src="https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?fit=2400%2C1600&ssl=1"
              alt="BATMAN" title="Batman also saw this pigeon">
          </div>
        </div>
      </section>
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
  "dateSeen": "2024-02-22T22:22:00.011Z",
  "creator": {
    "_id": "65d7838d5bdb257d2aefc377",
    "name": "Batman",
    "picture": "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2023/06/Untitled_Artwork-116.png?fit=2400%2C1600&ssl=1",
    "id": "65d7838d5bdb257d2aefc377"
  },
  "watchersCount": 2,
  "id": "65d786fd5e3067727324d64f"
}