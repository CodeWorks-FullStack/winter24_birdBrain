import { AppState } from "../AppState.js";
import { Bird } from "../models/Bird.js";
import { api } from "./AxiosService.js"

class BirdsService {

  async getBirds() {
    const response = await api.get('api/birds')
    console.log('📡 GOT BIRDS', response.data);
    const newBirds = response.data.map(birdPOJO => new Bird(birdPOJO))
    AppState.birds = newBirds
    // console.log(AppState.birds);
  }

  async createBird(birdFormData) {
    const response = await api.post('api/birds', birdFormData)
    console.log('📡 CREATED BIRD', response.data);
    const newBird = new Bird(response.data)
    AppState.birds.push(newBird)
    AppState.emit('birds')
  }

  async setActiveBird(birdId) {
    const foundBird = AppState.birds.find(bird => bird.id == birdId)
    AppState.activeBird = foundBird
  }

}

export const birdsService = new BirdsService()