import { Component } from '@angular/core';
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

  // constructor(public timer: ReturnType<typeof setTimeout>){
  // }
  changeImg(){
    for (let e of this.listEvent){
      if(e.id == this.idShow) this.urlShow = e.url;
    }
  }

  // timer = setTimeout((idShow:number, urlShow:string, index: number, counter:number, listEvent:any) => {
  //   if(index == counter-1){
  //     index = 0;
  //   }
  //   index++;
  //   idShow = listEvent[index].id; // 1
  //   urlShow = listEvent[index].url
  // }, 2000);

  // let timer: ReturnType<typeof setTimeout> = setTimeout((idShow:number, urlShow:string, index: number, counter:number, listEvent) => {
  //   if(index == counter-1){
  //     index = 0;
  //   }
  //   index++;
  //   idShow = listEvent[index].id; // 1
  //   urlShow = listEvent[index].url
  // }, 5000);

  // clearTimeout(timer);

  toEvent(id:number){
    this.idShow = id;
    this.changeImg();
  }
  toPrev(){
    if(this.index == 0) this.index = this.counter-1;
    else this.index--;

    this.idShow = this.listEvent[this.index].id;
    this.urlShow = this.listEvent[this.index].url
  }
  toNext(){
    if(this.index == this.counter-1) this.index = 0;
    else this.index++;

    this.idShow = this.listEvent[this.index].id;
    this.urlShow = this.listEvent[this.index].url
  }
}
