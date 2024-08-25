/*
 - class should depend on interfaces rather than concrete class
 - i.e. dependency a class is expecting should be of interface and initialize with constructor injection

*/

interface IMouse {

}

interface IKeyboard {

}

class WiredMouse implements IMouse {

}

class BluetoothMouse implements IMouse {

}

class WiredKeyboard implements IKeyboard {

}

class BluetoothKeyboard implements IKeyboard {

}



class Macbook {
    mouse : IMouse //instead of WiredMouse or BluetoothMouse
    keyboard: IKeyboard // instead of WiredKeyboard or BluetoothKeyboard
    constructor(mouse:IMouse,keyboard:IKeyboard){
        this.keyboard = keyboard;
        this.mouse = mouse
    }
}


