import { AppState } from "../AppState.js";
import { upgradesService } from "../services/UpgradesService.js";
import { setHTML } from "../utils/Writer.js";


function _drawUpgrades(){
  console.log('Drawing upgrades');
  const clickUpgrades = AppState.clickUpgrades
  let content = ''
  clickUpgrades.forEach(upgrade => content += upgrade.shopButton)
  console.log('content', content);
  setHTML('shop-click', content)
}


export class UpgradesController{
  constructor(){
    _drawUpgrades()
  }

  buyUpgrade(upgradeName){
    console.log('buying', upgradeName);
    upgradesService.buyUpgrade(upgradeName)
    _drawUpgrades()
  }
}