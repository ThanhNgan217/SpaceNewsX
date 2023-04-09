import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7136';
  // private apiUrl = 'http://localhost:3000/login';


  private httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http:HttpClient) { }

  login(Username:string|null|undefined, Password:string|null|undefined){
    let user = {
      username: Username,
      password: Password
    }
    let json = JSON.stringify(user);
    console.log( json)
    return this.http.post<any>(`${this.apiUrl}/api/Auth/login`, json , this.httpOptions)
  }
}
