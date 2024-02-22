import { AppState } from "../AppState.js";
import { birdsService } from "../services/BirdsService.js";
import { getFormData } from "../utils/FormHandler.js";
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

  async createBird() {
    try {
      event.preventDefault()
      const form = event.target
      // console.log(form);
      const birdFormData = getFormData(form)
      console.log(birdFormData);
      await birdsService.createBird(birdFormData)
      Pop.success(`You saw ${birdFormData.name}!`)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}
