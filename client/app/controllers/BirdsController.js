import { birdsService } from "../services/BirdsService.js";
import { Pop } from "../utils/Pop.js";

export class BirdsController {
  constructor () {
    console.log('BIRDS CONTROLLER LOADED');
    Pop.success('You are so good at coding, jeremy + class')
    this.getBirds()
  }

  async getBirds() {
    try {
      await birdsService.getBirds()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}
