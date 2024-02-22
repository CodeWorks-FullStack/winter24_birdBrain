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

}

export const birdsService = new BirdsService()