import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  courses = "http://localhost:4000/courses";

  constructor(private http: HttpClient) {}

  add_course(obj) {
    return this.http.post(this.courses + "/add", JSON.stringify(obj));
  }

  get_courses() {
    return this.http.get(this.courses);
  }

  update_course(obj) {
    return this.http.post(this.courses + "/update", obj);
  }

  delete_course(u_id) {
    return this.http.delete(this.courses + "/" + u_id);
  }
}
