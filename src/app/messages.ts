export class Messages {
    static id: number;
    posts: Message[] = [];
    addPosts(post: Message) {
        post.id = Messages.id++;
        post.timeStamp = Date.now();
        this.posts.push(post);
    }
}

export class Message {
    id: number;
    timeStamp: number;
    constructor(public author: string, public message: string) {}
}
