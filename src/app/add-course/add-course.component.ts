import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CourseService } from "../course.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"]
})
export class AddCourseComponent implements OnInit {
  courseFormData: FormGroup;
  isAdded: Boolean;
  successMessage: any;
  errorMessage: any;
  alertClass: string;

  constructor(
    private courseDataService: CourseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.courseFormData = new FormGroup({
      course_name: new FormControl(null, Validators.required),
      course_code: new FormControl(null, Validators.required)
    });
  }

  add_course() {
    let myData = {
      course_name: this.courseFormData.value.course_name,
      course_code: this.courseFormData.value.course_code
    };
    console.log(myData);
    if (this.courseFormData.value.course_name) {
      this.courseDataService.add_course(myData).subscribe((data: any) => {
        if (data) {
          if (data.message) {
            this.isAdded = true;
            this.alertClass = "alert-success";
            this.successMessage = data.message;
            this.errorMessage = "";
            setTimeout(() => {
              this.isAdded = false;
              this.successMessage = "";
            }, 2000);
          } else {
            this.isAdded = true;
            this.alertClass = "alert-danger";
            this.successMessage = "Course already exists. .";
            setTimeout(() => {
              this.isAdded = false;
              this.successMessage = "";
            }, 2000);
          }
        } else {
          this.isAdded = false;
        }
      });
    }
  }
}
