import { Upgrade } from './models/Upgrade.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  brainPower = 100

  clickUpgrades = [
    new Upgrade({
      name: "Coffee",
      price: 5,
      picture: "https://em-content.zobj.net/source/microsoft-teams/363/hot-beverage_2615.png",
      multiplier: 5,
      quantity: 0
    }),
    new Upgrade({
      name: "Exercise",
      price: 10,
      picture: "https://em-content.zobj.net/source/microsoft-teams/363/man-lifting-weights_1f3cb-fe0f-200d-2642-fe0f.png",
      multiplier: 20,
      quantity: 0
    }),
    new Upgrade({
      name: "J Juice",
      price: 20,
      picture: "https://em-content.zobj.net/source/microsoft-teams/363/beer-mug_1f37a.png",
      multiplier: 100,
      quantity: 0
    })
  ]

  autoUpgrades = []

}

export const AppState = createObservableProxy(new ObservableAppState())