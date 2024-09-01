/*
    - strategy pattern is similar to bridge pattern but its intent is different.
    - Intent is : when we want to change behaviour of object at run time
    - Mostly we make strategy around method of abstract class

    why?
    - This pattern promotes loose coupling between the context and the strategy objects
    - It enables you to add new algorithms/implementors/strategies or modify existing ones without affecting the client code that uses them
    - It allows you to switch between different algorithms or behaviors at runtime based on specific conditions or user choices

*/


interface DriveStrategy { // DriveStrategy because there is drive method in abstract class and we want to make strategy around that method.
    drive() : void
}


class NormalDriveStrategy implements DriveStrategy {
    drive(): void {
        console.log("Implementation for the same")
    }
}

class SportDriveStrategy implements DriveStrategy {
    drive(): void {
        console.log("Implementation for the SportDriveStrategy")
    }
}

// we can keep on adding new drive strategies



// now we write actual class that should take driveStrategies

class Vehicle { // this is also called context
    driveObject : DriveStrategy
    constructor(driveObject : DriveStrategy){
        // so that driveObject can be changed at run time
        this.driveObject = driveObject
    }
    // we have made strategies for this drive method
    drive() : void {
        // call method of drive strategies
        this.driveObject.drive()
    }
}

// client code can call Vehicle class directly with the desired strategy
// or we can add seperate clsses for these

// eg

class NormalVehicle extends Vehicle {
    constructor(){
        super(new NormalDriveStrategy())
    }
}

class SportsVehicle extends Vehicle {
    constructor(){
        super(new SportDriveStrategy())
    }
}

