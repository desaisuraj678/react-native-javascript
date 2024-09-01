/*

- Bridge pattern decouples abstraction from its implementation (here implementation is method for which we will create bridge) so that two can vary independently

 The Bridge pattern attempts to solve this problem by switching from inheritance to the object composition.

 "Bridge", "State", "Strategy" (and to some degree "Adapter") have very similar structures.
  Indeed, all of these patterns are based on composition, which is delegating work to other objects. However, their intent is different


  there will be bridge between abstraction and Implementor

  why ?
  - its very extensible (we can keeep on adding new breathing process)
  - decouples abstraction from implementation
  - also It allows you to switch between different algorithms or behaviors at runtime based on specific conditions or user choices // this is intent of strategy pattern

*/





abstract class LivingThings {
    protected breathImplementor : BreathImplementor 
    constructor(breathImplementor : BreathImplementor ){
        this.breathImplementor =  breathImplementor
    }
    abstract breathProcess() : void // we need to have different implementaions for this method thats why we have created BreathImplementor
}

class Cat extends LivingThings {
    constructor(breathImplementor : BreathImplementor){
        super(breathImplementor)
    }
    breathProcess(): void {
        // whatever breath implementation is passed will get called
        this.breathImplementor.breath()
    }
}

class Fish extends LivingThings {
    constructor(breathImplementor : BreathImplementor){
        super(breathImplementor)
    }
    breathProcess(): void {
        // whatever breath implementation is passed will get called
        this.breathImplementor.breath()
    }
}

class Tree extends LivingThings {
    constructor(breathImplementor : BreathImplementor){
        super(breathImplementor)
    }
    breathProcess(): void {
        // whatever breath implementation is passed will get called
        this.breathImplementor.breath()
    }
}





// we will create different implemeation for breath Implementor (or breath method of abstract class)

interface BreathImplementor {
    breath() : void
}

class LandBreathImplemention implements BreathImplementor {
    
    breath(): void {
        console.log("LandBreathImplemention")
        // write its own breathing process
    }
}


class WaterBreathImplemention implements BreathImplementor {
    
    breath(): void {
        console.log("WaterBreathImplemention")
        // write its own breathing process
    }
}


class TreeBreathImplemention implements BreathImplementor {
    
    breath(): void {
        console.log("TreeBreathImplemention")
        // write its own breathing process
    }
}

let fishObj : LivingThings = new Fish(new WaterBreathImplemention())
console.log(fishObj.breathProcess())

