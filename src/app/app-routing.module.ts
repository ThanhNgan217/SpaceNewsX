import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddEventComponent } from './add-event/add-event.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'addevent',
    component: AddEventComponent
  },
  {
    path: ':id',
    component: PostComponent
  },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
