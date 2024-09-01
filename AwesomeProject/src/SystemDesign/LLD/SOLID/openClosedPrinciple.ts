/*
 -- open for extention but closed for modification



*/



class InvoiceDao1 { // this clss should be open for extension but closed for modification
   invoice :Invoice1;
   constructor(invoice: Invoice1){
    this.invoice = invoice
   }
   saveToDB(){

   }

   // suppose new method comes for saving to fileSystem as well

   // then do not do this 
   saveToFile(){ // 

   }
}

// Solution


interface IInvoiceDao { // hence this is open for extentions
    save():void
}

class DatabaseInvoiceDao implements IInvoiceDao {
   save(): void {
       
   }
}

class FileInvoiceDao implements IInvoiceDao{
    save(): void {
        
    }
}