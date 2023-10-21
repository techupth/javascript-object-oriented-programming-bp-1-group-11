class EmailNotification { 
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

class SMSNotification { 
    constructor (notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    }
    send () {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}
const userEmail = new EmailNotification(1, "Aug 10, 2023 10:09 AM", "test", "2525BD@gmail.com");
const userSMS = new SMSNotification(2, "Aug 10, 2023 10:10 AM", "test", "0834452564")
userEmail.send()
userSMS.send()