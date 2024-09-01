/*
- The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object



example:
  1. dialog for creating and editing customer profiles. It consists of various form controls such as text fields, checkboxes, buttons, etc
          https://refactoring.guru/design-patterns/mediator
          (its really great example)

  2. Auction system. 



Chain of Responsibility, Command, Mediator and Observer address various ways of connecting senders and receivers of requests:

Chain of Responsibility passes a request sequentially along a dynamic chain of potential receivers until one of them handles it.
Command establishes unidirectional connections between senders and receivers.
Mediator eliminates direct connections between senders and receivers, forcing them to communicate indirectly via a mediator object.
Observer lets receivers dynamically subscribe to and unsubscribe from receiving requests.
*/

interface Colleague {
  placeBid(amount: number): boolean;
  receiveBidNotification(amount: number, bidFrom: string): void;
  getName(): string;
}

class Bidder implements Colleague {
  name: string;
  auctionMediator: AuctionMediator;
  constructor(name: string, auctionMediator: AuctionMediator) {
    this.name = name;
    this.auctionMediator = auctionMediator;
    this.auctionMediator.addBidder(this);
  }

  placeBid(amount: number): boolean {
    this.auctionMediator.placeBid(this, amount);
    return true;
  }

  receiveBidNotification(amount: number, bidFrom: string): void {
    console.log(
      'I am ' +
        this.getName() +
        ' Bid is from ' +
        bidFrom +
        ' Of amount ' +
        amount,
    );
  }

  getName(): string {
    return this.name;
  }
}

interface AuctionMediator {
  addBidder(bidder: Colleague): void;
  placeBid(bidder: Colleague, amount: number): void;
}

class Auction implements AuctionMediator {
  colleagues: Array<Colleague> = new Array();

  addBidder(bidder: Colleague): void {
    this.colleagues.push(bidder);
  }

  placeBid(bidder: Colleague, amount: number): void {
    for (let collegue of this.colleagues) {
      if (collegue.getName() != bidder.getName()) {
        collegue.receiveBidNotification(amount, bidder.getName()); // call methods of Collegues from Mediator
      }
    }
  }
}

const auction = new Auction();
const bidder1 = new Bidder('suraj', auction);
const bidder2 = new Bidder('ramu', auction);
const bidder3 = new Bidder('chomu', auction);

bidder1.placeBid(200);
// bidder2.placeBid(330);
// bidder1.placeBid(3300)
