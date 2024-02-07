import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js";



class UpgradesService{
  buyUpgrade(upgradeName) {
    const upgrade = AppState.clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    console.log(upgrade);
    if(AppState.brainPower >= upgrade.price){
      AppState.brainPower -= upgrade.price
      upgrade.quantity++
      upgrade.price = Math.round(upgrade.price * 1.25)
    } else {
      Pop.toast("You can't buy that, you stoopid.",'error', 'bottom')
    }
  }

}

export const upgradesService = new UpgradesService()