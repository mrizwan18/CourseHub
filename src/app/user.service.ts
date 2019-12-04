import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = 'http://localhost:4000/users';

  constructor(private http: HttpClient) { }
  
  register_user(obj){
    return this.http.post(this.users + '/add', obj);
  }
  
  get_user(){
    return this.http.get(this.users);
  }
  
  update_user(obj){
    return this.http.post(this.users+'/update',obj);
  }
 
  get_user_by_id (u_id) {
    return this.http.delete(this.users+'/'+u_id);
  }

}