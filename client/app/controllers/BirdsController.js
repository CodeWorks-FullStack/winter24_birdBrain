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

function _drawActiveBird() {
  const bird = AppState.activeBird
  setHTML('activeBird', bird.ActiveDetailsHTMLTemplate)
}

// NOTE sets max allowed date on datepicker to today's date
function _setMaxDate() {
  const datePickerElement = document.getElementById('dateSeen')
  const today = new Date().toISOString().substring(0, 10)
  datePickerElement.setAttribute('max', today)
  datePickerElement.setAttribute('value', today)
}

function _drawWatchers() {
  setHTML('active-watchers', AppState.activeBird.BirdWatchersTemplate)
}


export class BirdsController {
  constructor() {
    AppState.on('birds', _drawBirds)
    AppState.on('activeBird', _drawActiveBird)
    AppState.on('watchers', _drawWatchers)


    console.log('BIRDS CONTROLLER LOADED');
    // Pop.success('You are so good at coding, jeremy + class')
    _setMaxDate()
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

      // NOTE closes bootstrap modal
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance('#birdFormModal').hide()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  setActiveBird(birdId) {
    birdsService.setActiveBird(birdId)
  }
}
