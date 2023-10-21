class Notification { 
    constructor (notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send () {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
}
class EmailNotification extends Notification { 
    constructor (notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver)
    }
    send () {
        console.log(`Notification has been sent to ${this.notificationId}`)
    }   
}
class SMSNotification extends Notification { 
    constructor (notificationId, createdTime, content, phoneNumber) {
        super(notificationId, createdTime, content);
        this.phoneNumber = phoneNumber;
    }
    send () {
            console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
    }

const userEmail = new EmailNotification("2323AD@gmail.com", "Aug 10, 2023 10:09 AM", "test", "User B");
const userSMS = new SMSNotification("2323AD@gmail.com", "Aug 10, 2023 10:10 AM", "test", "0834452564")
userEmail.send()
userSMS.send()
