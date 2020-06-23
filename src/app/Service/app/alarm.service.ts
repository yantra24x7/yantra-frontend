import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor(private http:HttpClient) { }


  alarm_history(pageNo):Observable<any> {
    return this.http.get('alarm_histories?page='+pageNo+'&&per_page='+20);
  }
}

// ?page=' +pageNo+'&&per_page='+20