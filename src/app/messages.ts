export class Messages {
    static id: number;
    posts: Message[] = [];
    addPosts(post: Message) {
        post.id = Messages.id++;
        this.posts.push(post);
    }
}

export class Message {
    id: number;
    constructor(public author: string, public message: string) {}
}
