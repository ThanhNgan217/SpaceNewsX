import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private router : Router){}

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
  topicChecked = 0;

  topicChange(value : number){
    this.topicChecked = value;
  }
  toLogin(){
    this.router.navigate(['/login']);
  }
  // navLogin(){
  //    navigateByUrl(url: string | UrlTree, extras: NavigationExtras = { skipLocationChange: false }): Promise<boolean>;
  // }



}
