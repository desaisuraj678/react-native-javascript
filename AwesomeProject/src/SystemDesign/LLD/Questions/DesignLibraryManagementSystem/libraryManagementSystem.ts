/*
 1. find actors and use cases
 2. the use cases will be the methods that will be defined on multiple actor classes
 3. the methods that are only related to specific actor will be defined on that actor.
 4. the other methods that can be reused and are common across multiple actors will be defined in seperate class and actors will receive them as dependency


 below eg. 
 1. Librarian and Member are actors
 2. searchBookByAuthor , searchBookByTitle , addBookItem , blockMember , returnBookItem are use cases.
 3. addBookItem and blockMember are only related to Librarian so they will be defined in Librarian class
 4. searchBookByAuthor , searchBookByTitle  are common and cab be used by "Librarian" and "Member" so we will create "Search" or "Catalog" class
    and will define these methods on "Search" or "Catalog" class.
    "Catalog" will be passed as dependency to both "Librarian" and "Member" actor
    
*/


enum BookFormat {
    HARDCOVER,
    PAPERBACK,
    AUDIOBOOK,
    EBOOK,
    NEWSPAPER,
    MAGAZINE,
    JOURNAL
}

enum BookStatus {
    AVAILABLE,
    RESERVED,
    LOANED,
    LOST
}

enum ReservationStatus {
    WAITING,
    PENDING,
    CANCELED,
    NONE
}

enum AccountStatus {
    ACTIVE,
    CLOSED,
    CANCELED,
    BLACKLISTED,
    NONE
}

class Address {
    private streetAddress: string;
    private city: string;
    private state: string;
    private zipCode: string;
    private country: string;
    constructor(streetAddress: string,city: string,state: string,country: string,zipCode: string){
        this.city = city;
        this.state = state;
        this.streetAddress = streetAddress;
        this.zipCode = zipCode;
        this.country = country
    }
}

class LMSPerson {
    private name: string;
    private address: Address;
    private email: string;
    private phone: string;
    constructor(name: string,address: Address,email: string,phone: string){
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone
    }
}

class User {
    private id: string;
    private password: string;
    private status: AccountStatus;
    private person: Person;
    private card: string;

    constructor(id: string, password: string, status: AccountStatus, person: Person, card: string) {
        if (new.target === User) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.id = id;
        this.password = password;
        this.status = status;
        this.person = person;
        this.card = card;
    }

    resetPassword(): void {
        // Implementation here
    }
}

class Librarian extends User {
    private catalog : Catalog // common method related to search are kept in Catalog class so that it can be used by Librarian and Member
    constructor(search : Catalog,id: string, password: string, status: AccountStatus, person: Person, card: string) {
        super(id, password, status, person, card);
        this.catalog = search;
    }

    // Catalog methods that are common to Librarian and Member

    searchBookByTitle(title: string): LMSBook[] {
        return this.catalog.searchByTitle(title);
    }

    searchBookByAuthor(author: string): LMSBook[] {
        return this.catalog.searchByAuthor(author);
    }

    searchBySubject(subject: string): LMSBook[] {
        return this.catalog.searchByAuthor(subject);
    }

    searchByPublicationDate(publishDate: Date): LMSBook[] {
        return this.catalog.searchByPublicationDate(publishDate);
    }

    // methods specific to Librarian

    addBookItem(bookItem: BookItem): void {
        // receives BookItem which has setter "setAddedBy" to added by
        bookItem.setAddedBy(this);
    
        // bookItem.setPlacedAt(rackNumber)  // we can also expect rackNumber param in addBookItem to set rack number or rackNumber is set while creating BookItem itself
        // Additional logic
    }

    blockMember(member: Member): void {
        // Implementation
    }

    unBlockMember(member: Member): void {
        // Implementation
    }

    resetPassword(): void {
        // Implementation here
    }
}

class Member extends User {
    private catalog : Catalog
    private dateOfMembership: Date;
    private totalBooksCheckedOut: number;

    constructor(search : Catalog,id: string, password: string, status: AccountStatus, person: Person, card: string, membership: Date, books: number) {
        super(id, password, status, person, card);
        this.dateOfMembership = membership;
        this.totalBooksCheckedOut = books;
        this.catalog = search;
    }

    // Catalog methods that are common to Librarian and Member
    searchBookByTitle(title: string): LMSBook[] {
        return this.catalog.searchByTitle(title);
    }

    searchBookByAuthor(author: string): LMSBook[] {
        return this.catalog.searchByAuthor(author);
    }

    searchBySubject(subject: string): LMSBook[] {
        return this.catalog.searchByAuthor(subject);
    }

    searchByPublicationDate(publishDate: Date): LMSBook[] {
        return this.catalog.searchByPublicationDate(publishDate);
    }


    reserveBookItem(bookItem: BookItem): void {
        // Implementation
    }

    incrementTotalBooksCheckedOut(): void {
        this.totalBooksCheckedOut++;
    }

    checkoutBookItem(bookItem: BookItem): void {
        // Implementation
    }

    checkForFine(bookItemBarcode: string): void {
        // Implementation
    }

    returnBookItem(bookItem: BookItem): void {
        // Implementation
    }

    renewBookItem(bookItem: BookItem): void {
        // Implementation
    }

    resetPassword(): void {
        // Implementation here
    }
}

class BookReservation {
    private itemId: string;
    private creationDate: Date;
    private status: ReservationStatus;
    private memberId: string;

    constructor(itemId: string, creationDate: Date, status: ReservationStatus, memberId: string) {
        this.itemId = itemId;
        this.creationDate = creationDate;
        this.status = status;
        this.memberId = memberId;
    }

    fetchReservationDetails(bookItemId: string): void {
        // Implementation here
    }
}

class BookLending {
    private itemId: string;
    private creationDate: Date;
    private dueDate: Date;
    private returnDate: Date | null;
    private memberId: string;
    private bookReservation: BookReservation | null;
    private user: User | null;

    constructor(itemId: string, creationDate: Date, dueDate: Date, returnDate: Date | null, memberId: string) {
        this.itemId = itemId;
        this.creationDate = creationDate;
        this.dueDate = dueDate;
        this.returnDate = returnDate;
        this.memberId = memberId;
        this.bookReservation = null;
        this.user = null;
    }

    lendBook(bookItemId: string, memberId: string): void {
        // Implementation
    }

    fetchLendingDetails(bookItemId: string): void {
        // Implementation
    }
}

class Fine {
    private creationDate: Date;
    private bookItemId: string;
    private memberId: string;

    constructor(creationDate: Date, bookItemId: string, memberId: string) {
        this.creationDate = creationDate;
        this.bookItemId = bookItemId;
        this.memberId = memberId;
    }

    collectFine(memberId: string, days: number): void {
        // Implementation
    }
}

class LMSBook {
    private isbn: string;
    private title: string;
    private subject: string;
    private publisher: string;
    private language: string;
    private numberOfPages: number;
    private bookFormat: BookFormat;
    private authors: string[];

    constructor(isbn: string, title: string, subject: string, publisher: string, language: string, numberOfPages: number, bookFormat: BookFormat) {
        this.isbn = isbn;
        this.title = title;
        this.subject = subject;
        this.publisher = publisher;
        this.language = language;
        this.numberOfPages = numberOfPages;
        this.bookFormat = bookFormat;
        this.authors = [];
    }
}

class BookItem {
    private id: string;
    private isReferenceOnly: boolean;
    private borrowed: Date | null;
    private dueDate: Date | null;
    private price: number;
    private status: BookStatus;
    private dateOfPurchase: Date;
    private publicationDate: Date;
    private placedAt: Rack;
    private addedBy: Librarian | null;
    private book: LMSBook;

    constructor(id: string, isReferenceOnly: boolean, borrowed: Date | null, dueDate: Date | null, price: number, status: BookStatus, dateOfPurchase: Date, publicationDate: Date, placedAt: Rack, book: LMSBook) {
        this.id = id;
        this.isReferenceOnly = isReferenceOnly;
        this.borrowed = borrowed;
        this.dueDate = dueDate;
        this.price = price;
        this.status = status;
        this.dateOfPurchase = dateOfPurchase;
        this.publicationDate = publicationDate;
        this.placedAt = placedAt;
        this.addedBy = null;
        this.book = book;
    }

    checkout(memberId: string): boolean {
        // Checkout logic
        return true; // Placeholder
    }

    setPlacedAt(rack: Rack): void {
        this.placedAt = rack;
    }

    setAddedBy(librarian: Librarian): void {
        this.addedBy = librarian;
    }

    getBook(): LMSBook {
        return this.book;
    }
}

class Rack {
    private number: string;
    private locationIdentifier: string;
    private bookItems: BookItem[];

    constructor(number: string, locationIdentifier: string) {
        this.number = number;
        this.locationIdentifier = locationIdentifier;
        this.bookItems = [];
    }

    addBookItem(bookItem: BookItem): void {
        this.bookItems.push(bookItem);
    }
}

abstract class Notification {
    protected notificationId: string;
    protected creationDate: Date;
    protected content: string;

    constructor() {
        if (new.target === Notification) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    abstract sendNotification(): void;
}

class PostalNotification extends Notification {
    private address: Address;

    constructor(notificationId: string, creationDate: Date, content: string, address: Address) {
        super();
        this.notificationId = notificationId;
        this.creationDate = creationDate;
        this.content = content;
        this.address = address;
    }

    sendNotification(): void {
        // Implementation here
    }
}

class EmailNotification extends Notification {
    private email: string;

    constructor(notificationId: string, creationDate: Date, content: string, email: string) {
        super();
        this.notificationId = notificationId;
        this.creationDate = creationDate;
        this.content = content;
        this.email = email;
    }

    sendNotification(): void {
        // Implementation here
    }
}

class Search {
    searchByTitle(title: string): LMSBook[] {
        // Implementation here
        return [];
    }

    searchByAuthor(author: string): LMSBook[] {
        // Implementation here
        return [];
    }

    searchBySubject(subject: string): LMSBook[] {
        // Implementation here
        return [];
    }

    searchByPublicationDate(publishDate: Date): LMSBook[] {
        // Implementation here
        return [];
    }
}

class Catalog extends Search {
    private bookTitles: Map<string, LMSBook[]>;
    private bookAuthors: Map<string, LMSBook[]>;
    private bookSubjects: Map<string, LMSBook[]>;
    private bookPublicationDates: Map<string, LMSBook[]>;

    constructor() {
        super();
        this.bookTitles = new Map();
        this.bookAuthors = new Map();
        this.bookSubjects = new Map();
        this.bookPublicationDates = new Map();
    }
}

class LMSLibrary {
    private name: string;
    private address: Address;

    constructor(name: string, address: Address) {
        this.name = name;
        this.address = address;
    }

    getAddress(): Address {
        return this.address;
    }

    // Singleton instance
    private static library: LMSLibrary | null = null;

    static getInstance(): LMSLibrary {
        if (LMSLibrary.library === null) {
            LMSLibrary.library = new LMSLibrary('Default Library', new Address("dd","","","",""));
        } 
        return LMSLibrary.library;
    }
}
