import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-kpi-dashboard',
  templateUrl: './kpi-dashboard.component.html',
  styleUrls: ['./kpi-dashboard.component.scss']
})
export class KpiDashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  machine_response:any;
  parts:any;
  hour:any;
  content:any;
  higchart: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {


    this.http.get('http://192.168.1.160:3000/users').subscribe(res =>{
      console.log(res);
      this.machine_response = res;
     console.log(res[0].content)
     Highcharts.chart('container', {
      chart: {
        zoomType: 'xy',
        height: 120,
        backgroundColor: '#FFFFFF'
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
        categories: [],
        crosshair: false,
        labels: {
          enabled: false
        }
      }],
      yAxis: [{ // Primary yAxis
        // gridLineColor: '#45B734',
        labels: {
          enabled: false,
          style: {
            // color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: '',
          style: {
            // color: Highcharts.getOptions().colors[1]
          }
        }
      },
      { // Secondary yAxis
        title: {
          text: '',
          style: {
            // color: Highcharts.getOptions().colors[0]
          }
        },

        opposite: false
      }],
      tooltip: {
        shared: true
      },
      series: [{
        showInLegend: false,
        borderColor: '#FFFFFF',
        // name: 'Hour',
        // type: 'column',
        // yAxis: 1,
        data: [res[0].content],
        color: "#FFFFFF",
        tooltip: {
          valueSuffix: ' ',
        }

      }, {
        showInLegend: false,
        // name: 'Parts',
        // type: 'spline',
        data: [res[0].part],

        color: " #FFFFFF",
        tooltip: {
          valueSuffix: ''
        }
      }]
    });
      console.log(this.machine_response)
    })
    //Active

    
   
    
   
    
   
  }
  ngAfterViewInit() {
  
   
  


  
  }

};


