import { AppState } from "../AppState.js"
import { Watcher } from "../models/Watcher.js";
import { api } from "./AxiosService.js"

class WatchersService {
  async getWatchersByBirdId() {
    const birdId = AppState.activeBird.id
    const response = await api.get(`api/birds/${birdId}/watchers`)
    const newWatchers = response.data.map(watcherPOJO => new Watcher(watcherPOJO))
    AppState.watchers = newWatchers
  }
}

export const watchersService = new WatchersService()