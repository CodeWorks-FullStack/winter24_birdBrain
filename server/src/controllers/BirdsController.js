import { Auth0Provider } from "@bcwdev/auth0provider";
import { birdsService } from "../services/BirdsService.js";
import BaseController from "../utils/BaseController.js";
import { watchersService } from "../services/WatchersService.js";


export class BirdsController extends BaseController {

  constructor () {
    super('api/birds')
    this.router
      .get('', this.getBirds)
      .get('/:birdId/watchers', this.getWatchersByBirdId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // @ts-ignore
      .post('', this.createBird)
      .delete('/:birdId', this.deleteBird)
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

  async getWatchersByBirdId(req, res, next) {
    try {
      const birdId = req.params.birdId
      const watchers = await watchersService.getWatchersByBirdId(birdId)
      res.send(watchers)
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

      // @ts-ignore
      // v this enforces the right user from the bearer token
      birdData.creatorId = req.userInfo.id;
      const bird = await birdsService.createBird(birdData)
      res.send(bird)
    } catch (error) {
      next(error)
    }
  }

  async deleteBird(req, res, next) {
    try {
      const birdId = req.params.birdId;
      await birdsService.deleteBird(birdId, req.userInfo.id);
      res.send("Bird deleted successfully");
    } catch (error) {
      next(error);
    }
  }


}
