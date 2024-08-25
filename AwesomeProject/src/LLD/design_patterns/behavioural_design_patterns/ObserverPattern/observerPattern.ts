/**
 * -  Observer is a behavioral design pattern that lets you define a subscription mechanism to
 *    notify multiple objects about any events that happen to the object they’re observing
 *
 *
 * Contains :
 *    1. Observable (Publisher)
 *    2. Observers  (Subscriber)
 *
 *
 *
 *
 *
 *
 *
 *
 */

// question is if there is no stock available then give a button which gives option to notify once stock is available

interface IStockObservable {
    // so this interface keeps track of state changes (so it consists state, which means observable has a state) and also has all subsribers
    add(observer: INotificationAlertObserver): void; // subsribe method
    remove(observer: INotificationAlertObserver): void; // unsubsribe method
    notifySubscribers(): void; // once stock is available call update method
    setStockCount(newStockCount: number): void;
    getStockCount(): number;
  }
  
  interface INotificationAlertObserver {
    update(): void;
  }
  
  class IphoneObservable implements IStockObservable {
    private observers: Array<INotificationAlertObserver> = new Array();
    private count = 0;
  
    add(observer: INotificationAlertObserver): void {
      this.observers.push(observer);
    }
  
    remove(observer: INotificationAlertObserver): void {
      this.observers = this.observers.filter(item => item != observer);
    }
  
    notifySubscribers(): void {
      // whenever there is any state change in Observable then call update method of all observers
      this.observers.forEach(item => {
        item.update();
      });
    }
  
    getStockCount(): number {
      return this.count;
    }
  
    setStockCount(newStockCount: number): void {
      if (this.count == 0) {
        this.notifySubscribers();
      }
      this.count += newStockCount;
    }
  }
  
  class EmailNotificationAlertObserver implements INotificationAlertObserver {
    emailID: string;
    observalble: IStockObservable; // observers has observalble
    constructor(observalble: IStockObservable, emailID: string) {
      this.emailID = emailID;
      this.observalble = observalble;
    }
    update(): void {
        this.sendEmail(this.emailID,"message sent")
    }
  
    private sendEmail(emailID:string,msg:string){
      console.log("email sent " + emailID + msg)
    }
  
  }
  
  // class SMSNotificationAlertObserver implements INotificationAlertObserve // can be multiple observers
  
  
  class SMSNotificationAlertObserver implements INotificationAlertObserver {
      mobileNumber: string;
      observalble: IStockObservable; // observers has observalble
      constructor(observalble: IStockObservable, mobileNumber: string) {
        this.mobileNumber = mobileNumber;
        this.observalble = observalble;
      }
      update(): void {
          this.sendSMS(this.mobileNumber,"message sent")
      }
    
      private sendSMS(mobileNumber:string,msg:string){
        console.log("SMS sent " + mobileNumber + msg)
      }
    
  }
  
  
  const iphoneStockObservable = new IphoneObservable()
  
  // now when user comes and click on notify me over email then we create 1 observer
  
  const observer1 : INotificationAlertObserver = new EmailNotificationAlertObserver(iphoneStockObservable,"test@gmial.com")
  // and add this observer to iphoneStockObservable
  
  iphoneStockObservable.add(observer1)
  
  // now when user comes and click on notify me over sms then we create 1 observer
  
  const observer2 : INotificationAlertObserver = new SMSNotificationAlertObserver(iphoneStockObservable,"234344454545")
  // and add this observer to iphoneStockObservable
  
  iphoneStockObservable.add(observer2)
  
  // now whenever there is state change in observable like
  
  setTimeout(()=>{
     iphoneStockObservable.setStockCount(10)
  },5000)
  
  // then all observers will be called after 5 sec
  
  