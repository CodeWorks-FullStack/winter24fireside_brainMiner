import { GameController } from "./controllers/GameController.js";
import { UpgradesController } from "./controllers/UpgradesController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [GameController, UpgradesController],
    view: ``
  }
])