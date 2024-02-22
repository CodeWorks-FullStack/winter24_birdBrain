import { dbContext } from "../db/DbContext.js"

class BirdsService {
  async getBirds() {
    const birds = await dbContext.Birds.find().populate('creator', 'name picture')
    return birds
  }
  async createBird(birdData) {
    const bird = await dbContext.Birds.create(birdData)
    // NOTE Special syntax for populate on creates
    await bird.populate('creator', 'name picture')
    return bird
  }




}

// This is the singleton pattern
export const birdsService = new BirdsService()
