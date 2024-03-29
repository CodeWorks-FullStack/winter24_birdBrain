import { Auth0Provider } from "@bcwdev/auth0provider";
import { watchersService } from "../services/WatchersService.js";
import BaseController from "../utils/BaseController.js";

export class WatchersController extends BaseController {

  constructor () {
    super('/api/watchers')
    this.router
      // NOTE must be logged in for all routes
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createWatcher)
      .delete('/:watcherId', this.destroyWatcher)
  }


  async createWatcher(req, res, next) {
    try {
      const watcherData = req.body
      watcherData.accountId = req.userInfo.id
      const watcher = await watchersService.createWatcher(watcherData)
      res.send(watcher)
    } catch (error) {
      next(error)
    }
  }

  async destroyWatcher(req, res, next) {
    try {
      // NOTE the _id of the many-to-many relationship
      const watcherId = req.params.watcherId
      // NOTE the id of the user making the request
      const userId = req.userInfo.id
      const message = await watchersService.destroyWatcher(watcherId, userId)
      res.send(message)
    } catch (error) {
      next(error)
    }
  }

}
