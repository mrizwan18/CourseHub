import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login', 
    component:LoginComponent
  },
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'register', 
    component:RegisterComponent
  },
  {
    path:'list-users', 
    component:ListUsersComponent
  },
  {
    path:'edit-user/:id', 
    component:EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
