/*
- Visitor is a behavioral design pattern that allows adding new behaviors(methods) to existing class hierarchy without altering any existing code
*/


interface IRoomElement {
  accept(visitor: IRoomVisitor): void;
}

interface IRoomVisitor {
  visitSingleRoom(singleRoomObj: SingleRoom): void;
  visitDoubleRoom(doubleRoomObj: DoubleRoom): void;
  visitDeluxeRoom(deluxeRoomObj: DeluxeRoom): void;
}

class SingleRoom implements IRoomElement {
  accept(visitor: IRoomVisitor): void {
    visitor.visitSingleRoom(this)
  }
}

class DoubleRoom implements IRoomElement {
  accept(visitor: IRoomVisitor): void {
    visitor.visitDoubleRoom(this)
  }
}

class DeluxeRoom implements IRoomElement {
  accept(visitor: IRoomVisitor): void {
    visitor.visitDeluxeRoom(this)
  }
}


class RoomPricingVisitor implements IRoomVisitor {
    visitDeluxeRoom(deluxeRoomObj: DeluxeRoom): void {
        
    }
    visitDoubleRoom(doubleRoomObj: DoubleRoom): void {
        
    }
    visitSingleRoom(singleRoomObj: SingleRoom): void {
        
    }
}

class RoomMaintainanceVisitor implements IRoomVisitor {
    visitDeluxeRoom(deluxeRoomObj: DeluxeRoom): void {
        
    }
    visitDoubleRoom(doubleRoomObj: DoubleRoom): void {
        
    }
    visitSingleRoom(singleRoomObj: SingleRoom): void {
        
    }
}
