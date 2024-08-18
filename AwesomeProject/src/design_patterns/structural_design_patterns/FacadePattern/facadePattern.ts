/*

- Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes
 and hides actual complexity of original classes
- A facade might provide limited functionality in comparison to working with the subsystem directly.
 However, it includes only those features that clients really care about
*/



interface IOrderFacade {
    createOrder() : boolean
}

class OrderFacade implements IOrderFacade {
    private productDAO : ProductDao
    private invoice : Invoice

     /**
     * Depending on your application's needs, you can provide the Facade with
     * existing subsystem objects or force the Facade to create them on its own.
     * Mostly prefer to create on its own
     */
    constructor(productDAO : ProductDao,invoice : Invoice){
        this.productDAO = productDAO || new ProductDao()
        this.invoice = invoice ||  new Invoice()
    }

    createOrder() : boolean {
        // this method uses all the complex classes and returns result
        let product = this.productDAO.getProduct();
        this.invoice.generateInvoice()
        console.log(product)
        return true
    }
} 



class ProductDao {
    getProduct(): string {
        return "product"
    }
}


class Invoice {
    generateInvoice() : boolean {
        return true
    }
}





// facade vs Adapter
// Facade defines a new interface for existing objects, whereas Adapter tries to make the existing interface usable

// Abstract Factory can serve as an alternative to Facade when you only want to hide the way the subsystem objects are created from the client code