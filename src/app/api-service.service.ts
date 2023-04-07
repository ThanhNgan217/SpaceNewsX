import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://localhost:7136';

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('accept','*/*');

  constructor(private http:HttpClient) { }

  login(Username:string|null|undefined, Password:string|null|undefined){
    let user = {
      userName: Username,
      password: Password
    }
    let json = JSON.stringify(user);
    console.log( json)
    return this.http.post<any>(`${this.apiUrl}/api/Auth/login`, json , { 'headers': this.headers })
    // , { 'headers': this.headers }
  }
}
