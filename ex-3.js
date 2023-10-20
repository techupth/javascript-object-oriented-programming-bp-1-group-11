//  Start coding here
class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }
  
  class Post {
    constructor(id, title, content) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.comments = [];
    }
  
    addComment(comment) {
      this.comments.push(comment);
    }
  }
  
  class Comment {
    constructor(id, content, createdBy) {
      this.id = id;
      this.content = content;
      this.createdBy = createdBy;
      this.likes = 0;
    }
  
    addLike() {
      this.likes += 1;
    }
  }
  
  class FacebookGroup {
    constructor(name) {
      this.name = name;
    }
  }
  
  class FacebookPage {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Facebook {
    constructor() {
      this.groupList = [];
      this.pageList = [];
    }
  
    addGroup(group) {
      this.groupList.push(group);
    }
  
    addPage(page) {
      this.pageList.push(page);
    }
  }
  
  class Notification {
    constructor(id) {
      this.id = id;
    }
  
    send(commentCreatedBy, postTitle) {
      console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
    }
  }
  
  const user = new User("1", "John Doe", "john@example.com");
  const post = new Post("1", "My First Post", "This is my first post on Facebook.");
  const comment = new Comment("1", "Great post!", "Alice");
  const group = new FacebookGroup("My Group");
  const page = new FacebookPage("My Page");
  const facebook = new Facebook();
  const notification = new Notification("1");
  
  post.addComment(comment);
  
  comment.addLike();
  
  facebook.addGroup(group);
  facebook.addPage(page);
  
  notification.send(comment.createdBy, post.title);
  