import { Auth0Provider } from "@bcwdev/auth0provider";
import { birdsService } from "../services/BirdsService.js";
import BaseController from "../utils/BaseController.js";

export class BirdsController extends BaseController {

  // NOTE Jeremy rules!!!! FRONT-END TEAM THE BEST
  constructor () {
    super('api/birds')
    this.router
      .get('', this.getBirds)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // @ts-ignore
      .post('', this.createBird)
  }


  async getBirds(req, res, next) {
    try {
      const birds = await birdsService.getBirds()
      // res.send({ results: birds, endpoint: '/api/birds', })
      res.send(birds)
    } catch (error) {
      next(error)
    }
  }


  /**
   * This is the api controller for creating a bird
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async createBird(req, res, next) {
    try {
      const birdData = req.body
      // v this enforces the right user from the bearer token
      birdData.creatorId = req.userInfo.id;
      const bird = await birdsService.createBird(birdData)
      res.send(bird)
    } catch (error) {
      next(error)
    }
  }

}
