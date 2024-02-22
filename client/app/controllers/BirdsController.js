import { AppState } from "../AppState.js";
import { birdsService } from "../services/BirdsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawBirds() {
  const birds = AppState.birds
  let htmlString = ''
  birds.forEach(bird => htmlString += bird.BirdCardHTMLTemplate)
  setHTML('birdCards', htmlString)
}


export class BirdsController {
  constructor () {
    AppState.on('birds', _drawBirds)


    console.log('BIRDS CONTROLLER LOADED');
    // Pop.success('You are so good at coding, jeremy + class')
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
