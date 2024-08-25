/* Interface Segregation Principle

// interfaces should be such that client should not implement unnecessary methods they do not need
*/

// problem

interface RestaurantEmployee {
    washDishes() : void
    serveCostumers() :void
    cookFood():void
}

class Waiter implements RestaurantEmployee {
    washDishes(): void {
        // this is not waiters job and these are uncessary for waiter
    }
    serveCostumers(): void {
        console.log("implementation")
    }
    cookFood(): void {
        // this is not waiters job
    }
}


// solution
// the pattern suggest to break down interfaces in small parts


interface IWaiter {
    serveCostumers() :void
}

class Waiter1 implements IWaiter {
    serveCostumers(): void {
        
    }
}


interface IChef {
    cookFood(): void
}

class Chef implements IChef {
    cookFood(): void {
        
    }
}