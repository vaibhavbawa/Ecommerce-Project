import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8000/api/v1/login/users";
  constructor(private http:HttpClient) { }

 postUser(data:any): Observable<any>{
    return this.http.post(this.url,data)
   }

}
