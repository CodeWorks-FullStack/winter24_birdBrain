import { dbContext } from "../db/DbContext.js"

class BirdsService {
  async getBirds() {
    const birds = await dbContext.Birds.find()
    return birds
  }
  async createBird(birdData) {
    const bird = await dbContext.Birds.create(birdData)
    return bird
  }




}

// This is the singleton pattern
export const birdsService = new BirdsService()
