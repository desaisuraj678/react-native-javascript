class Marker {
  name: string;
  color: string;
  price: number;

  constructor(name: string, color: string, price: number) {
    this.color = color;
    this.name = name;
    this.price = price;
  }
}

class Invoice1 {
  marker: Marker;
  quantity: number
  constructor(marker: Marker,quantity: number) {
    this.marker = marker;
    this.quantity = quantity
  }
  calculatePrice():number {
    return this.quantity * this.marker.price
  }

  saveToDB(){

  }
  
  generateInvoice(){

  }
}


/*

Now suppose we want to change the calculation logic then we can change it in calculatePrice method.
But also if there is change in saveToDB or generateInvoice then also we have to change the class (here there are multiple reasons to chage the class)
- Single responsibilty principle tells that there should be only one reason to change the class and only one responsibility
*/


// solution : as saving to db and invoice genrating pr printing are completely different tasks and can be seperated


class Invoice2 {
    marker: Marker;
    quantity: number
    constructor(marker: Marker,quantity: number) {
      this.marker = marker;
      this.quantity = quantity
    }
    calculatePrice():number { // only one responsibilty
      return this.quantity * this.marker.price
    }

}

class InvoiceDao {
    invoice: Invoice2
    constructor(invoice:Invoice2){
        this.invoice = invoice
    }
    saveToDB(){
        console.log("saved")
    }
}


class InvoicePrinter {
    invoice: Invoice2
    constructor(invoice:Invoice2){
        this.invoice = invoice
    }
    generateInvoice(){
        console.log("invoice generated")
    }
}