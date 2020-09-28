import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class KpyService {

  constructor(private http: HttpClient) { }

  god():Observable<any>{
    return this.http.get('kpy_dashboard')

}
}
