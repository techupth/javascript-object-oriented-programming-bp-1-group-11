class User {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class PostList{
    constructor(posts){
        this.posts = []
    }
    addPost(post){
        this.posts.push(post);
    }
    sharePost(post){
        console.log(`You've shared post ${post.title} to your friend.`)
    }
}
class Post{
    constructor(id, title, content, comment){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }
    addComment(comment){
        this.comment.push(comment);
    }
    }
class Comment {
    constructor(id, content, createdBy, like){
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addLike(){
        this.like++;
    }
}
class Facebook{
    constructor(groupList, pageList){
        this.groupList = [];
        this.pageList = [];
    }
    addGroup(group){
        this.groupList.push(group);
    }
    addPage(page){
        this.pageList.push(page);
    }
}
class FacebookPage {
    constructor(name){
        this.name = name;
    }
}
class Notification extends Post {
    constructor(id, title) {
        super(id, title);
    }
    send(){
        console.log(`Notification: ${this.id} has just commented on this post—${this.title}`)
    }
}