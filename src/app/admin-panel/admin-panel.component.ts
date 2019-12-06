import { Component, OnInit } from "@angular/core";
import { CourseService } from "../course.service";
import { Router } from "@angular/router";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.css"]
})
export class AdminPanelComponent implements OnInit {
  faEdit = faEdit;
  faRemove = faTrash;
  courses: any = [];

  constructor(private userDataService: CourseService, private router: Router) {}

  ngOnInit() {
    this.get_all_courses();
  }

  get_all_courses() {
    this.userDataService.get_courses().subscribe((data: any) => {
      this.courses = data["courses"];
    });
  }
}
