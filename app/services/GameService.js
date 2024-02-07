import { AppState } from "../AppState.js"


class GameService{
  mine() {
    // AppState.brainPower += 1
    let power = 0
    let clickUpgrades = AppState.clickUpgrades
    clickUpgrades.forEach(upgrade => power += upgrade.multiplier * upgrade.quantity)
    AppState.brainPower += power + 1
  }

}

export const gameService = new GameService()