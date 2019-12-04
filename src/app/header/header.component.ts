import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus: any;

  constructor(public route: Router, private userDataService: UserService) { }

  ngOnInit() {
    if(sessionStorage.getItem('isLoggedIn') == 'true'){
      this.loginStatus = false;
    }else{
      this.loginStatus = true;
    }
  }

  logout(): void {
    sessionStorage.setItem('isLoggedIn', "false");
    this.loginStatus = true;
    this.route.navigate(['/login']);
  }

}