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
  constructor(private http:HttpClient) { }

  ngOnInit() {


    this.http.get('http://192.168.1.160:3000/users').subscribe(res =>{
      console.log(res);
      this.machine_response = res;
      console.log(this.machine_response)
    })
    //Active
    Highcharts.chart('container', {
      chart: {
        zoomType: 'xy',
        height: 120,
        backgroundColor: '#45B734'
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
        gridLineColor: '#45B734',
        labels: {
          enabled: false,
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: '',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      },
      { // Secondary yAxis
        title: {
          text: '',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },

        opposite: false
      }],
      tooltip: {
        shared: true
      },
      series: [{
        showInLegend: false,
        borderColor: '#056B2D',
        name: 'Hour',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
        color: "#056B2D",
        tooltip: {
          valueSuffix: ' ',
        }

      }, {
        showInLegend: false,
        name: 'Parts',
        type: 'spline',
        data: [7.0, 110.9, 20.5, 300.5, 18.2, 75.5, 25.2, 120.5],
        color: "#16A500",
        tooltip: {
          valueSuffix: ''
        }
      }]
    });
    //Idle
   
     //Stop
     Highcharts.chart('container3', {
      chart: {
        zoomType: 'xy',
        height: 120,
        backgroundColor: '#F81301'
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
        gridLineColor: '#45B734',
        labels: {
          enabled: false,
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: '',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      },
      { // Secondary yAxis
        title: {
          text: '',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },

        opposite: false
      }],
      tooltip: {
        shared: true
      },
      series: [{
        showInLegend: false,
        borderColor: '#BA1D11',
        name: 'Hour',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5],
        color: "#BA1D11",
        tooltip: {
          valueSuffix: ' ',
        }

      }, {
        showInLegend: false,
        name: 'Parts',
        type: 'spline',
        data: [7.0, 110.9, 20.5, 300.5, 18.2, 75.5, 25.2, 120.5],
        color: "#F81301",
        tooltip: {
          valueSuffix: ''
        }
      }]
    });
  }

}
