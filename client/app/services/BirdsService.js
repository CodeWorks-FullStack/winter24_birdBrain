import { api } from "./AxiosService.js"

class BirdsService {
  async getBirds() {
    const response = await api.get('api/birds')
    console.log('📡 GOT BIRDS', response.data);
  }

}

export const birdsService = new BirdsService()