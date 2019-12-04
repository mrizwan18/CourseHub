import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginFormData: FormGroup;
  u_email: any;
  u_pass: any;
  isLogin: Boolean = false;
  logIncorrect: Boolean = true;
  userStatus: any = false;

  constructor(private userDataService: UserService, private router: Router) { }

  ngOnInit() {
    this.userLoginFormData = new FormGroup(
      {
        'user_email': new FormControl(null,[Validators.required, Validators.email]),
        'user_password': new FormControl(null,Validators.required)
      }
    )
  }
  login(){
    this.u_email = this.userLoginFormData.value.user_email;
    this.u_pass = this.userLoginFormData.value.user_password;
    if(this.u_email && this.u_pass ){
      this.userDataService.get_user().subscribe(
        (data: any)=>{
          if(data.count && data.count > 0){
            data.users.forEach(element => {
              if(element.user_email == this.u_email && element.user_password == this.u_pass) {
                this.isLogin = true;
                sessionStorage.setItem('isLoggedIn', "true");
                this.router.navigate(['/list-users']);
              }else{
                this.logIncorrect = false;
              }
            });
          }else{
            this.logIncorrect = false;
          }
        });
    }
  }
}