import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'http://localhost:8000/api/v1/get/category'
  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get(this.url);
  }
}
