import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarService} from '../../Nav/navbar.service';
import { PageEvent, MatPaginator} from '@angular/material/paginator';
import { AlarmService} from '../../Service/app/alarm.service';
import { MatSort,MatTableDataSource,} from '@angular/material';
import { untilDestroyed } from 'ngx-take-until-destroy';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
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

  // Show and hide function code
  public show:boolean = true;
  public buttonName:any = 'hidden';

  toggleDisplay() { this.isShow = !this.isShow; }
  isShow = true;

  ngOnInit() {
    this.getAlarmHistory();

    // Graph for view chart
    Highcharts.chart('container', {
      chart: {
          zoomType: 'xy',
          height: 400,
          backgroundColor: '#202328'
      },
       exporting: {
          enabled: false
        },
        credits: {
          enabled: false
        },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      xAxis: [{
          categories: ['Setup', 'Part Changeover', 'Other', 'Offset/Tool Changeover', 'A/P Reached Count', 'Material',
              'Machine Maintenance', 'Machine Problem', 'No Operator', 'Barloader', 'Chipping Out', 'No Tooling'],
          crosshair: true
      }],
      yAxis: [{ // Primary yAxis
        gridLineColor: '#4f4f4f',
          labels: {
              format: '{value}k',
              style: {
                  color: Highcharts.getOptions().colors[1]
              }
          },
          title: {
              text: 'Minutes of Downtime',
              style: {
                  color: Highcharts.getOptions().colors[1]
              }
          }
      }, { // Secondary yAxis
          title: {
              text: 'Occurrance',
              style: {
                  color: Highcharts.getOptions().colors[0]
              }
          },
          labels: {
              style: {
                  color: Highcharts.getOptions().colors[0]
              }
          },
          opposite: true
      }],
      tooltip: {
          shared: true
      },
      legend: {
          layout: 'vertical',
          align: 'left',
          x: 120,
          verticalAlign: 'top',
          y: 100,
          floating: true,
          backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || // theme
              'rgba(255,255,255,0.25)'
      },
      series: [{
           showInLegend: false,
           borderColor: '#E8A249',
          name: 'Minutes of Downtime',
          type: 'column',
          color: "#E8A249",
          yAxis: 1,
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
  
      }, {
           showInLegend: false,
          name: 'Occurrance',
          color: "#ba6606",
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      }]
  });
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
