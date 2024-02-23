import { AppState } from "../AppState.js";
import { watchersService } from "../services/WatchersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

function _drawWatchers() {
  const watchers = AppState.watchers

  let htmlString = ''

  watchers.forEach(watcher => htmlString += watcher.ProfilePictureHTMLTemplate)

  setHTML('watcherPictures', htmlString)
  setText('watcherCount', `${watchers.length} ${watchers.length == 1 ? 'watcher' : 'watchers'}`)
}

export class WatchersController {
  constructor () {
    // NOTE we only want to get watchers after a bird is set active in the AppState
    AppState.on('activeBird', this.getWatchersByBirdId)
    AppState.on('watchers', _drawWatchers)
  }

  async getWatchersByBirdId() {
    try {
      await watchersService.getWatchersByBirdId()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async createWatcher() {
    try {
      await watchersService.createWatcher()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async destroyWatcher(watcherId) {
    try {
      const wantsToDestroy = await Pop.confirm(
        "Are you sure you haven't seen that bird?",
        "You already said that you did, which is kind of weird TBH",
        "Yeah dude I made a mistake okay")

      if (!wantsToDestroy) {
        return
      }

      await watchersService.destroyWatcher(watcherId)
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}