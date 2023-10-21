class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class PostList {
    constructor() {
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }

    sharePost(post) {
        console.log(`You've shared post "${post.title}" to your friend.`);
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
        this.likes++;
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

class FacebookPage {
    constructor(name) {
        this.name = name;
    }
}

class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
}

class Notification extends Post {
    constructor(id, title) {
        super(id, title, "");
    }

    send(createdBy, postTitle) {
        console.log(`Notification: ${this.id} has just commented on this post—${postTitle}`);
    }
}
//usage
const user = new User("1", "John Doe", "john@example.com");
const post = new Post("1", "My First Post", "This is my first post on Facebook.");
const comment = new Comment("1", "Great post!", "Alice");
const group = new FacebookGroup("My Group");
const page = new FacebookPage("My Page");
const facebook = new Facebook();
const notification = new Notification("1", "My First Post");
post.addComment(comment);
comment.addLike();

facebook.addGroup(group);
facebook.addPage(page);

notification.send(comment.createdBy, post.title);