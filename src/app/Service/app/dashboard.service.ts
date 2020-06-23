import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment} from '../../../environments/environment';
import { TokenService } from '../core/authentication/token.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  
  getmachines():Observable<any> {
    return this.http.get('get_machine_status2')
  }
  machine_count():Observable<any> {
    return this.http.get('machine_count')
  }
}
