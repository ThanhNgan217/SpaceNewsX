import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-silder',
  templateUrl: './silder.component.html',
  styleUrls: ['./silder.component.css']
})
export class SilderComponent {
  listEvent=[
    {
      id: 1,
      url:'/assets/img/event-img/event1.png'
    },
    {
      id: 2,
      url:'/assets/img/event-img/event2.png'
    },
    {
      id: 3,
      url:'/assets/img/event-img/event3.png'
    }
  ]
  index = 0;
  idShow = this.listEvent[this.index].id; // 1
  urlShow = this.listEvent[this.index].url
  counter = this.listEvent.length;

  ngOnInit(){
    setInterval(() => {
      if(this.index == this.counter-1) this.index = 0;
      else this.index++;

      this.idShow = this.listEvent[this.index].id;
      this.urlShow = this.listEvent[this.index].url
    }, 4000);

  }


  // constructor(public timer: ReturnType<typeof setTimeout>){
  // }
  changeImg(){
    clearInterval;
    for (let e of this.listEvent){
      if(e.id == this.idShow) this.urlShow = e.url;
    }
  }
  toEvent(id:number){
    clearInterval;
    this.idShow = id;
    this.changeImg();
  }
  toPrev(){
    clearInterval;
    if(this.index == 0) this.index = this.counter-1;
    else this.index--;

    this.idShow = this.listEvent[this.index].id;
    this.urlShow = this.listEvent[this.index].url
  }
  toNext(){
    clearInterval;
    if(this.index == this.counter-1) this.index = 0;
    else this.index++;

    this.idShow = this.listEvent[this.index].id;
    this.urlShow = this.listEvent[this.index].url
  }
}
