import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class WatchersService {

  async getWatchersByBirdId(birdId) {
    const watchers = await dbContext.Watchers.find({ birdId }).populate('profile', 'name picture')
    return watchers
  }

  async createWatcher(watcherData) {
    const watcher = await dbContext.Watchers.create(watcherData)
    await watcher.populate('profile', 'name picture')
    return watcher
  }

  async destroyWatcher(watcherId, userId) {
    const watcher = await dbContext.Watchers.findById(watcherId)

    // NOTE null check
    if (!watcher) {
      throw new BadRequest(`No watcher found with id: ${watcherId}`)
    }

    // NOTE throws a 403 if you try to delete someone else's data
    if (watcher.accountId != userId) {
      throw new Forbidden("YOU ARE NOT THE PERSON WHO CREATED THIS PIECE OF DATA")
    }

    await watcher.deleteOne()

    return 'No longer watching that bird, dawg'
  }

}

export const watchersService = new WatchersService()