interface Aggregator {
  createIterator(): IIterator;
}

interface IIterator {
  hasNext(): boolean;
  next(): any;
}

class Library implements Aggregator { // this class is a collection of some type , like hashmap n array etc.
  private bookList: Array<Book>;
  constructor(bookList: Array<Book>) {
    this.bookList = bookList;
  }
  createIterator(): IIterator {
    return new BookIterator(this.bookList);
  }
}

class BookIterator implements IIterator {
  private bookList: Array<Book>;
  private index : number = 0
  constructor(bookList: Array<Book>) {
    this.bookList = bookList;
  }
  hasNext(): boolean {
    return this.index < this.bookList.length;
  }
  next(): any {
    if(this.hasNext()){
        return this.bookList[this.index]
    }
    return null
  }
}

class Book {
  private price: number;
  private bookName: number;
  constructor(bookName: number, price: number) {
    this.price = price;
    this.bookName = bookName;
  }
  getPrice() {
    return this.price;
  }
  getBookName() {
    return this.bookName;
  }
}
