enum RoomAvailability {
    AVAILABLE,
    UNAVAILABLE,
  }
  
  enum NotificationType {
    INVITATION,
    CANCELLATION,
  }
  
  class MSUser {
    private name: string;
    private email: string;
  
    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }
  
    respondInvitation(invite: MSNotification): void {}
  }
  
  class Interval {
    private startTime: Date;
    private endTime: Date;
  
    constructor(startTime: Date, endTime: Date) {
      this.startTime = startTime;
      this.endTime = endTime;
    }
  }
  
  class MeetingRoom {
    private id: string;
    private capacity: number;
    private isAvailable: RoomAvailability;
    private bookedIntervals: Interval[];
  
    constructor(id: string, capacity: number, isAvailable: RoomAvailability) {
      this.id = id;
      this.capacity = capacity;
      this.isAvailable = isAvailable;
      this.bookedIntervals = [];
    }
  }
  
  class Meeting {
    private id: string;
    private participantsCount: number;
    private participants: MSUser[];
    private interval: Interval;
    private room: MeetingRoom;
    private subject: string;
  
    constructor(id: string, participantsCount: number, interval: Interval, room: MeetingRoom, subject: string) {
      this.id = id;
      this.participantsCount = participantsCount;
      this.participants = [];
      this.interval = interval;
      this.room = room;
      this.subject = subject;
    }
  
    addParticipants(participants: MSUser[]): void {}
  }

  class Calendar {
    private meetings: Meeting[];
  
    constructor() {
      this.meetings = [];
    }
  }
  
  class MeetingScheduler {
    private static instance: MeetingScheduler;
    private organizer: MSUser;
    private calendar: Calendar;
    private rooms: MeetingRoom[];
  
    // Scheduler is a singleton class that ensures it will have only one active instance at a time
    private constructor(organizer: MSUser, calendar: Calendar) {
      if (MeetingScheduler.instance) {
        throw new Error("Singleton classes can't be instantiated more than once.");
      }
      MeetingScheduler.instance = this;
      this.organizer = organizer;
      this.calendar = calendar;
      this.rooms = [];
    }
  
    // Created a static method to access the singleton instance of Scheduler class
    static getInstance(organizer: MSUser, calendar: Calendar): MeetingScheduler {
      if (!MeetingScheduler.instance) {
        return new MeetingScheduler(organizer, calendar);
      }
      return MeetingScheduler.instance;
    }
  
    scheduleMeeting(users: MSUser[], interval: Interval): void {}
    cancelMeeting(users: MSUser[], interval: Interval): void {}
    bookRoom(room: MeetingRoom, numberOfPersons: number, interval: Interval): void {}
    releaseRoom(room: MeetingRoom, interval: Interval): void {}
    checkRoomsAvailability(numberOfPersons: number, interval: Interval): boolean {
      return true; // Placeholder
    }
  }
  
  class MSNotification {
    private notificationId: string;
    private content: string;
    private creationDate: Date;
    private type: NotificationType;
  
    constructor(notificationId: string, content: string, creationDate: Date, type: NotificationType) {
      this.notificationId = notificationId;
      this.content = content;
      this.creationDate = creationDate;
      this.type = type;
    }
  
    sendNotification(user: MSUser): void {}
    cancelNotification(user: MSUser): void {}
  }
  