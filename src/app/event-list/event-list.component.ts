import { Component } from '@angular/core';
import { Post } from './posts';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  ListTopic = [
    {
      id : 1,
      subject : 'Subject 1'
    },
    {
      id : 2,
      subject : 'Subject 2'
    },
    {
      id : 3,
      subject : 'Subject 3'
    },
  ]

  ListPosts : Post[] = [
    {
      id : 1,
      idTopic : 1,
      title : "Rijeka begins year of European Capital of ...",
      url : '/assets/img/event-img/event1.png',
      time : new Date(),
      author : 'A',
      counter : '4 min read'
    },
    {
      id : 2,
      idTopic : 2,
      title : "Rijeka begins year of European Capital of ...",
      url : '/assets/img/event-img/event1.png',
      time : new Date(),
      author : 'B',
      counter : '4 min read'
    },
    {
      id : 3,
      title : "Rijeka begins year of European Capital of ...",
      idTopic : 3,
      url : '/assets/img/event-img/event1.png',
      time : new Date(),
      author : 'C',
      counter : '4 min read'
    },
  ]

  topicChecked = 0;
  topicChange(value : number){
    this.topicChecked = value;
  }
}
