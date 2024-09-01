
// this is decorator because it decorates any of the base class (imp) (here base pizza)
interface IBasePizza {
    cost():number
  }
  
  class Farmhouse implements IBasePizza {
      cost(): number {
          return 200
      }
  }
  
  
  class VegDelight implements IBasePizza {
      cost(): number {
          return 300
      }
  }
  
  
  class EggDelight implements IBasePizza {
      cost(): number {
          return 400
      }
  }
  
  // these EggDelight VegDelight Farmhouse are independent and can't(beacuse of inheritance) and should not mix and match with each other
  // mix and match haapens with exactly one base class and 1 or more decorator classes
  // so decorator has both is-a and has-a relationship
  
  
  class ToppingsDecorator implements IBasePizza {
      private basePizza : IBasePizza
      constructor(basePizza : IBasePizza){
          this.basePizza = basePizza
      }
      cost(): number {
          return this.basePizza.cost()
      }
  }
  
  // now these Toppings decorator can mix and match with any of the base pizza
  class ExtraCheese extends ToppingsDecorator {
      cost(): number {
          return 10 + super.cost()
      }
  }
  
  
  class Mushroom extends ToppingsDecorator {
      cost(): number {
          return 50 + super.cost()
      }
  }
  
  
  
  
  // here to be noted : the inner most object is of type basePizza or base class and others are of ToppingsDecorators
  
  
  let pizza= new Mushroom(new ExtraCheese(new VegDelight()))
  console.log(pizza.cost())