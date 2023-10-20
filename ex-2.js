class Notification { constructor(notificationId, createdTime, content, receiver) {
    this.notificationId = notificationId;
    this.createdTime = createdTime;
    this.content = content;
    this.receiver = receiver;
  }

  send() {
    console.log(`Notification has been sent to ${this.receiver}`);
  }
} 

class EmailNotification extends Notification{
    constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  }
 }

class SMSNotification extends Notification{
    constructor(notificationId, createdTime, content, receiver) {
    super(notificationId, createdTime, content, receiver);
  } 
}
const emailNotification = new EmailNotification(
  "1",
  "2023-10-21 10:00",
  "Hello, this is an email notification.",
  "john@example.com"
);
const smsNotification = new SMSNotification(
  "2",
  "2023-10-21 11:00",
  "Hello, this is an SMS notification.",
  "1234567890"
);
emailNotification.send();
smsNotification.send();