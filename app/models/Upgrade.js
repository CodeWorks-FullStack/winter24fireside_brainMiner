



export class Upgrade{
  constructor(data){
    console.log("creating an upgrade");
    this.name = data.name
    this.price = data.price
    this.picture = data.picture
    this.multiplier = data.multiplier
    this.quantity = data.quantity
  }

  get shopButton(){
    return `
 <div class="col-6 mb-1 p-1">
   <button class="btn btn-info w-100" onclick="app.UpgradesController.buyUpgrade('${this.name}')">
    [${this.quantity}] ${this.name} 🧠${this.price} +${this.multiplier}
   </button>
 </div>
 `
  }
}