import { dbContext } from "../db/DbContext.js"

class BirdsService {
  async getBirds() {
    const birds = await dbContext.Birds.find()
      .populate('creator', 'name picture')
      .populate('watchersCount')
    return birds
  }
  async createBird(birdData) {
    const bird = await dbContext.Birds.create(birdData)
    // NOTE Special syntax for populate on creates
    await bird.populate('creator', 'name picture')
    return bird
  }
  async deleteBird(birdId, userId) {
    const bird = await dbContext.Birds.findOne({ _id: birdId, creatorId: userId })
    if (!bird) {
      throw new Error('Bird not found or you are not the creator')
    }
    await bird.deleteOne()
  }

}

// This is the singleton pattern
export const birdsService = new BirdsService()
