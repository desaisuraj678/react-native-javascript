// Enums
enum ProductType {
    CHOCOLATE,
    SNACK,
    BEVERAGE,
    OTHER
}

// state design pattern

// Abstract State class
abstract class State {
    abstract insertMoney(machine: VendingMachine, amount: number): void;
    abstract pressButton(machine: VendingMachine, rackNumber: number): void;
    abstract returnChange(amount: number): void;
    abstract updateInventory(machine: VendingMachine, rackNumber: number): void;
    abstract dispenseProduct(machine: VendingMachine, rackNumber: number): void;
}

// NoMoneyInsertedState class
class NoMoneyInsertedState extends State {
    insertMoney(machine: VendingMachine, amount: number): void {
        // changes state to MoneyInsertedState
    }
    pressButton(machine: VendingMachine, rackNumber: number): void {
        // cannot press button without money
    }
    returnChange(amount: number): void {}
    updateInventory(machine: VendingMachine, rackNumber: number): void {}
    dispenseProduct(machine: VendingMachine, rackNumber: number): void {}
}

// MoneyInsertedState class
class MoneyInsertedState extends State {
    insertMoney(machine: VendingMachine, amount: number): void {}
    pressButton(machine: VendingMachine, rackNumber: number): void { // select product and press button
        // check if product item is available
        // validate money
        // change state to DispenseState 
    }
    returnChange(amount: number): void {}
    updateInventory(machine: VendingMachine, rackNumber: number): void {}
    dispenseProduct(machine: VendingMachine, rackNumber: number): void {}
}

// DispenseState class
class DispenseState extends State {
    insertMoney(machine: VendingMachine, amount: number): void {}
    pressButton(machine: VendingMachine, rackNumber: number): void {}
    returnChange(amount: number): void {}
    updateInventory(machine: VendingMachine, rackNumber: number): void {}
    dispenseProduct(machine: VendingMachine, rackNumber: number): void {
        // dispense product
        // change state to NoMoneyInsertedState
    }
}

// Product class
class Product {
    private name: string;
    private id: string;
    private price: number;
    private type: ProductType;

    constructor(name: string, id: string, price: number, type: ProductType) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.type = type; // ProductType enum
    }
}

// Rack class
class VMRack {
    productIds: string[];
    private rackNumber: number;

    constructor(productIds: string[], rackNumber: number) {
        this.productIds = productIds;
        this.rackNumber = rackNumber;
    }

    isEmpty(): boolean {
        return this.productIds.length === 0;
    }
}

// Inventory class
class Inventory {
    private noOfProducts: number;
    private products: Map<string, Product>;

    constructor(noOfProducts: number, products: Map<string, Product>) {
        this.noOfProducts = noOfProducts;
        this.products = products;
    }

    addProduct(productId: string, rackId: number): void {
        // add product logic
    }

    removeProduct(productId: string, rackId: number): void {
        // remove product logic
    }
}

// VendingMachine class (Singleton)
class VendingMachine {
    private static _instance: VendingMachine | null = null;
    private currentState: State;
    private amount: number;
    private noOfRacks: number;
    private racks: VMRack[];
    private availableRacks: number;

    private constructor(currentState: State, amount: number, noOfRacks: number, racks: VMRack[], availableRacks: number) {
        if (VendingMachine._instance) {
            throw new Error("Singleton classes can't be instantiated more than once.");
        }

        VendingMachine._instance = this;
        this.currentState = currentState;
        this.amount = amount;
        this.noOfRacks = noOfRacks;
        this.racks = racks;
        this.availableRacks = availableRacks;
    }

    // Static method to access the Singleton instance
    static getInstance(): VendingMachine {
        if (!VendingMachine._instance) {
            // You can provide default values or initial setup for the machine here
            const defaultState = new NoMoneyInsertedState(); // Default state
            const defaultRacks: VMRack[] = []; // Initial empty racks
            VendingMachine._instance = new VendingMachine(defaultState, 0, 5, defaultRacks, 5);
        }
        return VendingMachine._instance;
    }

    insertMoney(amount: number): void {
        this.currentState.insertMoney(this, amount);
    }

    pressButton(rackNumber: number): void {
        this.currentState.pressButton(this, rackNumber);
    }

    returnChange(amount: number): void {
        this.currentState.returnChange(amount);
    }

    updateInventory(rackNumber: number): void {
        this.currentState.updateInventory(this, rackNumber);
    }

    dispenseProduct(rackNumber: number): void {
        this.currentState.dispenseProduct(this, rackNumber);
    }

    getProductIdAtRack(rackNumber: number): string | null {
        const rack = this.racks[rackNumber];
        if (rack && !rack.isEmpty()) {
            return rack.productIds[0]; // Assuming we return the first product in the rack
        }
        return null;
    }
}
