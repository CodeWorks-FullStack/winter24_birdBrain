import { AppState } from "../AppState.js";
import { watchersService } from "../services/WatchersService.js";
import { Pop } from "../utils/Pop.js";

export class WatchersController {
  constructor () {
    // NOTE we only want to get watchers after a bird is set active in the AppState
    AppState.on('activeBird', this.getWatchersByBirdId)
  }

  async getWatchersByBirdId() {
    try {
      await watchersService.getWatchersByBirdId()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}