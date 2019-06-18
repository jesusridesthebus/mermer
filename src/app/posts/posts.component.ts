import { Component, OnInit } from '@angular/core';
import { Messages, Message } from '../messages';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Messages;
  postMessage: string;
  constructor() { }

  ngOnInit() {
    this.posts = new Messages();
  }

  post() {
    this.posts.addPosts(new Message(
      "Pillow Guy",
      this.postMessage
    ))    
  }
}
