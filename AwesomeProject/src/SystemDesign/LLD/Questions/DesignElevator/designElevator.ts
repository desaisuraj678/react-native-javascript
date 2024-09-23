
// define enums required for elevator system
enum ElevatorState {
    IDLE,
    UP,
    DOWN
}

enum Direction {
    UP,
    DOWN
}

enum DoorState {
    OPEN,
    CLOSED
}


// Button is abstract class and HallButton and ElevatorButton extends it

abstract class Button {
    private status: boolean;
    constructor(status: boolean) {
        if (new.target === Button) {
            throw new Error("Abstract classes can't be instantiated.");
        } else {
            this.status = status;
        }
    }
    isPressed(): boolean {
        return this.status
    }
}

class HallButton extends Button {
    private buttonSign: Direction;

    constructor(status: boolean, buttonSign: Direction) {
        super(status);
        this.buttonSign = buttonSign;
    }

    pressDown(): void {
        // implementation
        this.buttonSign = Direction.DOWN
    }

    pressUp(): void {
        // implementation
        this.buttonSign = Direction.UP
    }
}

class ElevatorButton extends Button {
    private destinationFloorNumber: number;

    constructor(status: boolean, destinationFloorNumber: number) {
        super(status);
        this.destinationFloorNumber = destinationFloorNumber;
    }

    pressDown(): void {
        // implementation
    }
}


class ElevatorPanel {
    private floorButtons: ElevatorButton[];
    private openButton: Button;
    private closeButton: Button;

    constructor(openButton: Button, closeButton: Button) {
        this.openButton = openButton;
        this.closeButton = closeButton;
        this.floorButtons = [];
    }

    addFloorButton(button: ElevatorButton): void {
        this.floorButtons.push(button);
    }
}

class HallPanel {
    private upButton: HallButton;
    private downButton: HallButton;

    constructor(upButton: HallButton, downButton: HallButton) {
        this.upButton = upButton;
        this.downButton = downButton;
    }

    pressUp(): void {
        this.upButton.pressUp();
    }

    pressDown(): void {
        this.downButton.pressDown();
    }
}


class Display {
    private floor: number;
    private capacity: number;
    private direction: Direction;

    constructor(floor: number, capacity: number, direction: Direction) {
        this.floor = floor;
        this.capacity = capacity;
        this.direction = direction;
    }

    showElevatorDisplay(): void {
        // Implementation of elevator display logic
        console.log(`Floor: ${this.floor}, Capacity: ${this.capacity}, Direction: ${Direction[this.direction]}`);
    }

    showHallDisplay(): void {
        // Implementation of hall display logic
        console.log(`Direction: ${Direction[this.direction]}`);
    }
}

class ElevatorCar {
    private id: number;
    private door: DoorState;
    private state: ElevatorState;
    private display: Display;
    private panel: ElevatorPanel;

    constructor(id: number, door: DoorState, state: ElevatorState, display: Display, panel: ElevatorPanel) {
        this.id = id;
        this.door = door;
        this.state = state;
        this.display = display;
        this.panel = panel;
    }

    move(): void {
        // Implementation of move logic
        console.log(`Elevator ${this.id} is moving`);
    }

    stop(): void {
        // Implementation of stop logic
        console.log(`Elevator ${this.id} has stopped`);
    }
}


class Door {
    private status: DoorState;

    constructor(status: DoorState) {
        this.status = status;
    }

    isOpen(): boolean {
        return this.status === DoorState.OPEN;
    }
}


class Floor {
    private display: Display[];
    private panel: HallPanel[];

    constructor() {
        this.display = new Array<Display>();
        this.panel = new Array<HallPanel>();
    }

    isBottomMost(): boolean {
        // Implement logic to check if it's the bottom-most floor
        return false;  // Placeholder
    }

    isTopMost(): boolean {
        // Implement logic to check if it's the top-most floor
        return false;  // Placeholder
    }
}


class Building {
    private static building: Building | null = null; // Singleton instance
    private floor: Floor[];
    private elevator: ElevatorCar[];

    private constructor() {
        this.floor = new Array<Floor>();
        this.elevator = new Array<ElevatorCar>();
    }

    // Static method to access the singleton instance of Building class
    static getInstance(): Building {
        if (this.building === null) {
            this.building = new Building();
        }
        return this.building;
    }
}



class ElevatorSystem {
    private static system: ElevatorSystem | null = null; // Singleton instance
    private building: Building;
    private strategy: DispatchStrategy;

    private constructor(building: Building,strategy: DispatchStrategy) {
        this.building = building;
        this.strategy = strategy
    }

    // Method to monitor elevators
    monitoring(): void {
        // Implementation
    }

    setDispatchStrategy(strategy: DispatchStrategy): void {
        this.strategy = strategy;
    }

    dispatchElevator(requestedFloor: number, direction: Direction): void {
        this.strategy.dispatch(this.building, requestedFloor, direction);
    }

    // Static method to access the singleton instance of ElevatorSystem class
    static getInstance(building: Building,strategy: DispatchStrategy): ElevatorSystem {
        if (this.system === null) {
            this.system = new ElevatorSystem(building,strategy);
        }
        return this.system;
    }
}

interface DispatchStrategy {
    dispatch(building: Building, requestedFloor: number, direction: Direction): ElevatorCar | null;
}

class DistanceBasedStrategy implements DispatchStrategy {
    dispatch(building: Building, requestedFloor: number, direction: Direction): ElevatorCar | null {
        // Similar to the dispatch logic above
        // Returns the best elevator based on distance
        return null
    }
}

