// Enumerations
enum PaymentStatus {
    PENDING,
    CONFIRMED,
    DECLINED,
    REFUNDED
  }
  
  enum BookingStatus {
    PENDING,
    CONFIRMED,
    CANCELLED,
    DENIED,
    REFUNDED
  }
  
  enum SeatStatus {
    AVAILABLE,
    BOOKED,
    RESERVED
  }
  
  // Abstract MTBPerson class
  abstract class MTBPerson {
    protected name: string;
    protected address: string;
    protected email: string;
    protected phone: string;
  
    constructor(name: string, address: string, phone: string, email: string) {
      if (new.target === MTBPerson) {
        throw new Error("Abstract classes can't be instantiated.");
      }
      this.name = name;
      this.address = address;
      this.phone = phone;
      this.email = email;
    }
  }
  
  class Customer extends MTBPerson {
    private bookings: Booking[] = []; // List of bookings
  
    constructor(name: string, address: string, phone: string, email: string) {
      super(name, address, phone, email);
    }
  
    createBooking(booking: Booking) {}
    updateBooking(booking: Booking) {}
    deleteBooking(booking: Booking) {}
  }
  
  class Admin extends MTBPerson {
    addShow(show: ShowTime) {}
    updateShow(show: ShowTime) {}
    deleteShow(show: ShowTime) {}
    addMovie(movie: Movie) {}
    deleteMovie(movie: Movie) {}
  }
  
  class TicketAgent extends MTBPerson {
    createBooking(booking: Booking) {}
  }
  
  // Abstract Seat class
  abstract class Seat {
    protected seatNo: number;
    protected status: SeatStatus;
  
    constructor(seatNo: number, status: SeatStatus) {
      if (new.target === Seat) {
        throw new Error("Abstract classes can't be instantiated.");
      }
      this.seatNo = seatNo;
      this.status = status;
    }
  
    isAvailable() {}
    abstract setSeat(): void;
    abstract setRate(): void;
  }
  
  class Platinum extends Seat {
    private rate: number;
  
    constructor(seatNo: number, status: SeatStatus, rate: number) {
      super(seatNo, status);
      this.rate = rate;
    }
  
    setSeat() {
      // functionality 
    }
    setRate() {
      // functionality 
    }
  }
  
  class Gold extends Seat {
    private rate: number;
  
    constructor(seatNo: number, status: SeatStatus, rate: number) {
      super(seatNo, status);
      this.rate = rate;
    }
  
    setSeat() {
      // functionality 
    }
    setRate() {
      // functionality 
    }
  }
  
  class Silver extends Seat {
    private rate: number;
  
    constructor(seatNo: number, status: SeatStatus, rate: number) {
      super(seatNo, status);
      this.rate = rate;
    }
  
    setSeat() {
      // functionality 
    }
    setRate() {
      // functionality 
    }
  }
  
  class Movie {
    private title: string;
    private genre: string;
    private releaseDate: Date;
    private language: string;
    private duration: number;
    private shows: ShowTime[] = [];
  
    constructor(title: string, genre: string, language: string, releaseDate: Date, duration: number) {
      this.title = title;
      this.genre = genre;
      this.releaseDate = releaseDate;
      this.language = language;
      this.duration = duration;
    }
  }
  
  class ShowTime {
    private showId: number;
    private startTime: Date;
    private date: Date;
    private duration: number;
    private seats: Seat[] = [];
  
    constructor(showId: number, startTime: Date, date: Date, duration: number) {
      this.showId = showId;
      this.startTime = startTime;
      this.date = date;
      this.duration = duration;
    }
  
    showAvailableSeats() {}
  }
  
  class MovieTicket {
    private ticketId: number;
    private seat: Seat;
    private movie: Movie;
    private show: ShowTime;
  
    constructor(ticketId: number, seat: Seat, movie: Movie, show: ShowTime) {
      this.ticketId = ticketId;
      this.seat = seat;
      this.movie = movie;
      this.show = show;
    }
  }
  
  class City {
    private name: string;
    private state: string;
    private zipCode: string;
    private cinemas: Cinema[] = [];
  
    constructor(name: string, state: string, zipCode: string) {
      this.name = name;
      this.state = state;
      this.zipCode = zipCode;
    }
  }
  
  class Cinema {
    private cinemaId: number;
    private city: City;
    private halls: Hall[] = [];
  
    constructor(cinemaId: number, city: City) {
      this.cinemaId = cinemaId;
      this.city = city;
    }
  }
  
  class Hall {
    private hallId: number;
    private shows: ShowTime[] = [];
  
    constructor(hallId: number) {
      this.hallId = hallId;
    }
  
    findCurrentShows() {}
  }
  
  // Abstract Payment class
  abstract class Payment {
    protected amount: number;
    protected timestamp: Date;
    protected status: PaymentStatus;
  
    constructor(amount: number, timestamp: Date, status: PaymentStatus) {
      if (new.target === Payment) {
        throw new Error("Abstract classes can't be instantiated.");
      }
      this.amount = amount;
      this.timestamp = timestamp;
      this.status = status;
    }
  
    abstract makePayment(): void;
  }
  
  class Cash extends Payment {
    makePayment() {
      // functionality
    }
  }
  
  class CreditCard extends Payment {
    private nameOnCard: string;
    private cardNumber: string;
    private billingAddress: string;
    private code: string;
  
    constructor(amount: number, timestamp: Date, status: PaymentStatus, nameOnCard: string, cardNumber: string, billingAddress: string, code: string) {
      super(amount, timestamp, status);
      this.nameOnCard = nameOnCard;
      this.cardNumber = cardNumber;
      this.billingAddress = billingAddress;
      this.code = code;
    }
  
    makePayment() {
      // functionality
    }
  }
  
  // Abstract Notification class
  abstract class MTBNotification {
    protected notificationId: number;
    protected createdOn: Date;
    protected content: string;
  
    constructor(notificationId: number, createdOn: Date, content: string) {
      if (new.target === MTBNotification) {
        throw new Error("Abstract classes can't be instantiated.");
      }
      this.notificationId = notificationId;
      this.createdOn = createdOn;
      this.content = content;
    }
  
    abstract sendNotification(person: MTBPerson): void;
  }
  
  class MTBEmailNotification extends MTBNotification {
    sendNotification(person: MTBPerson) {
      // functionality 
    }
  }
  
  class PhoneNotification extends MTBNotification {
    sendNotification(person: MTBPerson) {
      // functionality 
    }
  }
  
  class Booking {
    private bookingId: number;
    private amount: number;
    private totalSeats: number;
    private createdOn: Date;
    private status: BookingStatus;
    private payment: Payment;
    private tickets: MovieTicket[] = [];
    private seats: Seat[] = [];
  
    constructor(bookingId: number, amount: number, totalSeats: number, createdOn: Date, status: BookingStatus, payment: Payment) {
      this.bookingId = bookingId;
      this.amount = amount;
      this.totalSeats = totalSeats;
      this.createdOn = createdOn;
      this.status = status;
      this.payment = payment;
    }
  }
  
  class MovieSearch {
    searchMovieTitle(title: string): string[] {
      return []; // functionality
    }
    searchMovieLanguage(language: string): string[] {
      return []; // functionality
    }
    searchMovieGenre(genre: string): string[] {
      return []; // functionality
    }
    searchMovieReleaseDate(date: Date): string[] {
      return []; // functionality
    }
  }
  
  class Catalogue extends MovieSearch {
    private movieTitles: Map<string, string[]> = new Map();
    private movieLanguages: Map<string, string[]> = new Map();
    private movieGenres: Map<string, string[]> = new Map();
    private movieReleaseDates: Map<string, string[]> = new Map();
  
    constructor() {
      super();
    }
  
    searchMovieTitle(title: string) {
      // functionality
      return this.movieTitles.get(title) || [];
    }
    searchMovieLanguage(language: string) {
      // functionality
      return this.movieLanguages.get(language) || [];
    }
    searchMovieGenre(genre: string) {
      // functionality
      return this.movieGenres.get(genre) || [];
    }
    searchMovieReleaseDate(date: Date) {
      // functionality
      return this.movieReleaseDates.get(date.toDateString()) || [];
    }
  }
  