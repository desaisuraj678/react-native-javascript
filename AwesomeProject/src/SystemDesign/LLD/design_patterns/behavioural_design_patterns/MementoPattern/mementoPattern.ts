
/*
  Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation
*/



class ConfigurationOriginator {
  private height: number;
  private width: number;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  setWidth(width: number) {
    this.width = width;
  }

  //instead of other objects trying to copy the state from the “outside,” the ConfigurationOriginator class itself can make the snapshot since it has full access to its own state.

  createMemento(): ConfigurationMemento {
    // create snapshot of current state of ConfigurationOriginator and return it
    return new ConfigurationMemento(this.height, this.width);
  }

  restoreMemento(mementoToBeRestored: ConfigurationMemento | undefined) {
    // restore state of ConfigurationOriginator from given memento state
    if (mementoToBeRestored){
        this.height = mementoToBeRestored.getHeight();
        this.width = mementoToBeRestored.getWidth();
    } 
  }
}

// Memento Configuration only to store state/data
// The pattern suggests storing the copy of the object’s state in a special object called memento
class ConfigurationMemento {
  private height: number;
  private width: number;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  getHeight(): number {
    return this.height;
  }

  getWidth(): number {
    return this.width;
  }
}

// care taker's sole responsiblity is to add or remove mementos from history

class ConfigurationCaretaker {
  history: Array<ConfigurationMemento>;
  constructor() {
    this.history = new Array();
  }

  addMemento(memento: ConfigurationMemento) {
    // method to add snapshot
    this.history.push(memento);
  }

  undo(): ConfigurationMemento | undefined {
    // remove last snapshot from history and return it
    if (this.history.length > 0) {
      return this.history.pop();
    }
    return undefined;
  }
}


const careTakerInstance =  new ConfigurationCaretaker();
const originatorInstance = new ConfigurationOriginator(30,3)

const snapShot1 = originatorInstance.createMemento()

careTakerInstance.addMemento(snapShot1)

originatorInstance.setHeight(322);
originatorInstance.setWidth(2222);

const snapShot2 = originatorInstance.createMemento()

careTakerInstance.addMemento(snapShot2)


originatorInstance.setHeight(2223);
originatorInstance.setWidth(11)

const undoObj = careTakerInstance.undo();

originatorInstance.restoreMemento(undoObj)