import { Auth0Provider } from "@bcwdev/auth0provider";
import { watchersService } from "../services/WatchersService.js";
import BaseController from "../utils/BaseController.js";

export class WatchersController extends BaseController {

  constructor() {
    super('/api/watchers')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createWatcher)
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

}
