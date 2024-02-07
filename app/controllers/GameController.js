import { AppState } from "../AppState.js"
import { gameService } from "../services/GameService.js"
import { setHTML } from "../utils/Writer.js"


function _drawBrainPower(){
  let brainPower = AppState.brainPower
  setHTML('brain-power', brainPower)
}


export class GameController{
  constructor(){
    console.log('🎮');
    _drawBrainPower()
    AppState.on('brainPower', _drawBrainPower)
  }

  mine(){
    gameService.mine()
  }
}