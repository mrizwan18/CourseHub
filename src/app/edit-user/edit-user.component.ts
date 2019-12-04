import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userFormControl: FormGroup;
  isRegister: Boolean;
  successMessage: any;
  errorMessage: any;
  alertClass: string;
  user_id: any;
  image_name: any;

  constructor(private userDataService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
        this.user_id = params.id;
    });

    this.userFormControl = new FormGroup(
      {
        'user_name': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
        'user_email': new FormControl('', [Validators.required, Validators.email]),
        'user_role': new FormControl('', Validators.required),
        'user_password': new FormControl('', Validators.required),
        'user_avatar': new FormControl(''),
        'user_status': new FormControl('active', Validators.required),
      }
    )

    this.userDataService.get_user().subscribe(
      (data: any)=>{
        data.users.forEach(element => {
          if(element._id == this.user_id) {
              this.userFormControl.controls.user_name.setValue(element.user_name);
              this.userFormControl.controls.user_email.setValue(element.user_email);
              this.userFormControl.controls.user_role.setValue(element.user_role);
              this.userFormControl.controls.user_password.setValue(element.user_password);
              this.userFormControl.controls.user_status.setValue(element.user_status);
            }
        });
      });
  }

  /**
   * Get image on change
   */

  get_image(img_name){
    this.image_name = img_name[0];
  }

  /**
   * Update user
   */

  update_user() {
    let myData = new FormData();
    myData.append('user_id', this.user_id);
    myData.append('user_name', this.userFormControl.value.user_name);
    myData.append('user_email', this.userFormControl.value.user_email);
    myData.append('user_role', this.userFormControl.value.user_role);
    myData.append('user_password', this.userFormControl.value.user_password);
    myData.append('user_avatar', this.image_name);
    myData.append('user_status', this.userFormControl.value.user_status);

      this.userDataService.update_user(myData).subscribe(
        (data: any) => {
          if (data) {
            if (data.message) {
              this.isRegister = true;
              this.successMessage = data.message;
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