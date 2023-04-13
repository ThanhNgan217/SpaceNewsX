import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  // { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    // { path: 'Auth', : LoginModule },

  //   // otherwise redirect to home
  //   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
