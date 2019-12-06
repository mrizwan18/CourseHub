import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  fileType,
  fileMaxSize,
  MatFileUploadComponent
} from "@webacad/ng-mat-file-upload";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.css"]
})
export class ListUsersComponent implements OnInit {
  faEdit = faEdit;
  faRemove = faTrash;
  users: any = [];

  constructor(private userDataService: UserService, private router: Router) {}

  ngOnInit() {
    /** Get users data upon loading component */
    this.get_all_users_data();
  }

  /**
   * Get all users data
   */

  get_all_users_data() {
    this.userDataService.get_user().subscribe((data: any) => {
      this.users = data["users"];
      this.users.sort((a, b) => a.user_name.localeCompare(b.user_name));
    });
  }

  /**
   * Delete User
   */

  del_user(user_id: any) {
    this.userDataService.get_user_by_id(user_id).subscribe((data: any) => {
      /** Refresh the table after deleting user */
      this.get_all_users_data();
    });
  }

  /**
   * Edit User
   */

  edit_user(user_id) {
    this.router.navigate(["/edit-user/" + user_id]);
  }
}
