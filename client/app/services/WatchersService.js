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

  async createWatcher() {
    const activeBird = AppState.activeBird

    const birdData = {
      birdId: activeBird.id
    }

    const response = await api.post('api/watchers', birdData)
    const newWatcher = new Watcher(response.data)
    AppState.watchers.push(newWatcher)
    AppState.emit('watchers')
  }

  async destroyWatcher(watcherId) {
    const response = await api.delete(`api/watchers/${watcherId}`)
    console.log(response.data);
    const watcherIndex = AppState.watchers.findIndex(watcher => watcher.id == watcherId)
    if (watcherIndex == -1) {
      throw new Error('findIndex is messed up, dawg')
    }
    AppState.watchers.splice(watcherIndex, 1)
    AppState.emit('watchers')
  }
}

export const watchersService = new WatchersService()