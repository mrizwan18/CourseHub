import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userFormControl: FormGroup;
  isRegister: Boolean;
  successMessage: any;
  errorMessage: any;
  alertClass: string;
  image_name: any;

  constructor(private userDataService: UserService, private router: Router) { }

  ngOnInit() {

    this.userFormControl = new FormGroup(
      {
        'user_name': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
        'user_email': new FormControl('', [Validators.required, Validators.email]),
        'user_role': new FormControl('', Validators.required),
        'user_password': new FormControl('', Validators.required),
        'user_avatar': new FormControl(''),
        'user_avatar_previous': new FormControl(''),
        'user_status': new FormControl('active', Validators.required),
      }
    )
  }

  /**
   * Get image on change
   */

  get_image(img_name){
    this.image_name = img_name[0];
  }

  /**
   * Register user
   */

  register_user() {
    let myData = new FormData();
    myData.append('user_name', this.userFormControl.value.user_name);
    myData.append('user_email', this.userFormControl.value.user_email);
    myData.append('user_role', this.userFormControl.value.user_role);
    myData.append('user_password', this.userFormControl.value.user_password);
    myData.append('user_avatar', this.image_name);
    myData.append('user_status', this.userFormControl.value.user_status);

    if ( this.userFormControl.value.user_email ) {
      this.userDataService.register_user(myData).subscribe(
        (data: any) => {
          if (data) {
            if (data.message) {
              this.isRegister = true;
              this.alertClass = 'alert-success';
              this.successMessage = data.message;
              this.errorMessage = '';
              setTimeout(() => {
                this.isRegister = false;
                this.successMessage = '';
              }, 2000);
            } else {
              this.isRegister = true;
              this.alertClass = 'alert-danger';
              this.successMessage = 'Email already exists. .';
              setTimeout(() => {
                this.isRegister = false;
                this.successMessage = '';
              }, 2000);
            }
          } else {
            this.isRegister = false;
          }
        });
    }
  }
}