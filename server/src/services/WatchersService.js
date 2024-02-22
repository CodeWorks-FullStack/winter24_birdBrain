import { dbContext } from "../db/DbContext.js"

class WatchersService {
  async getWatchersByBirdId(birdId) {
    const watchers = await dbContext.Watchers.find({ birdId }).populate('profile', 'name picture')
    return watchers
  }

  async createWatcher(watcherData) {
    const watcher = await dbContext.Watchers.create(watcherData)
    watcher.populate('profile', 'name picture')
    return watcher
  }



}

export const watchersService = new WatchersService()