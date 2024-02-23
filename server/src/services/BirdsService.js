import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

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

  async getBirdById(birdId) {
    const bird = await dbContext.Birds.findById(birdId)
    if (!bird) {
      throw new BadRequest(`Invalid id: ${birdId}`)
    }
    return bird
  }

  async updateBird(birdId, birdData, userId) {
    const birdToUpdate = await this.getBirdById(birdId)

    // NOTE checks to see if the user making the request created the bird. We should do this check BEFORE changing any data in the database
    if (birdToUpdate.creatorId != userId) {
      throw new Forbidden("YOU ARE NOT THE CREATOR OF THIS DATA, YOU DO NOT HAVE PERMISSION TO UPDATE IT")
    }

    birdToUpdate.name = birdData.name || birdToUpdate.name
    birdToUpdate.description = birdData.description || birdToUpdate.description

    // NOTE updates database
    await birdToUpdate.save()

    return birdToUpdate
  }

}

// This is the singleton pattern
export const birdsService = new BirdsService()
