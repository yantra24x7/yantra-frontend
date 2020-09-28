import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  signin(login):Observable<any> {
      return this.http.post('login', login);
  }
  // forgot(params):Observable<any> {
  //   return this.http.get('sessions/forgot_pwd='+params)
  // }

  anjeneya():Observable<any> {
    return this.http.get('kpy_dashboard');
}

}
