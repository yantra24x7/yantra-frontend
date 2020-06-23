import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { PageEvent, MatPaginator} from '@angular/material/paginator';
import { AlarmService} from '../../Service/app/alarm.service';
import { MatSort,MatTableDataSource,} from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  alarmHistory: any;
  pageNo: any;
  page_size= 20;
  searchText:any;
  pageSizeOptions:any;
  total_count: any;
  displayedColumns: string[] = ['position', 'machine', 'alarmtype', 'axis','date','time'];
  dataSource = new MatTableDataSource();
  myLoader = false;
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
 
  constructor(private nav:NavbarService,private alarmService:AlarmService) {
    this.nav.show();
   }
  //  pageEvent: PageEvent;

  ngOnInit() {
    this.getAlarmHistory();
  }
  getAlarmHistory() {
    this.myLoader = true;
      this.pageNo =1;
   this.alarmService.alarm_history(this.pageNo).pipe(untilDestroyed(this)).subscribe( res => {
     console.log(res);
     this.myLoader = false;

     this.alarmHistory = res.alarm_histories;
     this.dataSource = new MatTableDataSource(this.alarmHistory);
    this.total_count =res.alarms_count;

   })
  }
  pageEvent(e){
    this.myLoader = false;
   console.log(e);
    this.pageNo = e.pageIndex+1;
    this.alarmService.alarm_history(this.pageNo).pipe(untilDestroyed(this)).subscribe( res => {
      console.log(res);
      this.myLoader = false;
     this.alarmHistory = res.alarm_histories;
      this.dataSource = new MatTableDataSource(this.alarmHistory);
    })
  }
  ngOnDestroy() {}
}
