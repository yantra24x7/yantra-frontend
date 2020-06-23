import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) { }

  operator_create(data: any):Observable<any> {
    return this.http.post('operators', data);
  }
  operator_get(): Observable<any> {
    return this.http.get('operators');
  }
  operator_put(data: any, id: any):Observable<any> {
    return this.http.put('operators/' + id, data);
  }
  operator_delete(id: any) {
    return this.http.delete('operators/' + id);
  }
  

}
