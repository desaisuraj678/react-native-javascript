/*
 -  Decorator is a structural design pattern that lets you attach new behaviors
     to objects by placing these objects inside special wrapper objects that contain the behaviors

 - mix and match between base class and muliple decorator classes (imp only 1 base class and 1 or more decorator classes)

 why ?
- Good explanation in refactoringGuru. https://refactoring.guru/design-patterns/decorator
- It prevents class exlposion

Problem with inheritance :
Inheritance is static. You can’t alter the behavior of an existing object at runtime. You can only replace the whole object with another one that’s created from a different subclass.
Subclasses can have just one parent class. In most languages, inheritance doesn’t let a class inherit behaviors of multiple classes at the same time.


how ?
Aggregation/composition is the key principle behind many design patterns, including Decorator
the wrapper implements the same interface as the wrapped object

*/


// supoose there is Notification service that wants to send notification through Slack,Email and SMS
// and there can be mix match beteen them like (Slack and Email ) , (Email and SMS) , (Slack,Email and SMS)


// Step 1: Define the INotification interface
interface INotification {
    send(message: string): void;
}

// Step 2: Create Base Notification Class
class BaseNotification implements INotification {
    send(message: string): void {
        // Base notification might do nothing, or could handle logging, etc.
        console.log(`BaseNotification: ${message}`);
    }
}

// Step 3: Create Decorator Classes (Base decorator class)
abstract class NotificationDecorator implements INotification {
    protected notification: INotification;

    constructor(notification: INotification) {
        this.notification = notification;
    }

    send(message: string): void {
        this.notification.send(message);
    }
}

// Concrete Decorators with actual logic
class EmailDecorator extends NotificationDecorator {
    send(message: string): void {
        super.send(message); // If you want to preserve the base behavior
        console.log(`Sending Email: ${message}`);
        // Email sending logic goes here
    }
}

class SMSDecorator extends NotificationDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Sending SMS: ${message}`);
        // SMS sending logic goes here
    }
}

class SlackDecorator extends NotificationDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Sending Slack message: ${message}`);
        // Slack sending logic goes here
    }
}

// Step 4: Combine the Decorators
function notifyUser(message: string): void {
    let notification: INotification = new BaseNotification();
    notification = new EmailDecorator(notification);
    notification = new SMSDecorator(notification);
    notification = new SlackDecorator(notification);

    notification.send(message);
}

// Example usage:
notifyUser("Hello User! This is an important alert.");






// 1. design coffee machine
// 2. design pizza cost
// 3. design notification