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
  parts:any;allcycletime:any;
  hour:any;
  data:any;
  data1:any;
  content:any;
  higchart: any;
  myLoader = false;

  power: any;
  reflect: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {

  this.myLoader = true;

    this.http.get('http://192.168.1.160:3000/users').subscribe(res =>{
      this.machine_response = res;
      this.allcycletime =res;
      this.myLoader = false;

      console.log(this.allcycletime)
  })
  this.myLoader = true;

  setTimeout (() => {
    this.renderchart();
 }, 1000);
 this.myLoader = false;

  
}

renderchart(){
  for(let i=0; i<this.allcycletime.length; i++){
    console.log(this.allcycletime[i].content)
    console.log(this.allcycletime[i].part)
    this.data = this.allcycletime[i].content;
    this.data1 =  this.allcycletime[i].part
    this.reflect = this.allcycletime[i].status;
    console.log(this.reflect)

    // '#45B734''#45B734'

    Highcharts.chart('partcycle'+i, {
      chart: {
        renderTo: 'container',
        zoomType: 'xy',
        height: 120,
        // backgroundColor: ''
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
          // style: {
          //   color: Highcharts.getOptions().colors[1]
          // }
        },
        title: {
          text: '',
          // style: {
          //   color: Highcharts.getOptions().colors[1]
          // }
        }
      },
      { // Secondary yAxis
        title: {
          text: '',
          // style: {
          //   color: Highcharts.getOptions().colors[0]
          // }
        },

        opposite: false
      }],
      tooltip: {
        shared: true
      },
    
      series: [{
        showInLegend: false,
        // borderColor: '#056B2D',
        name: 'Hour',
        type: 'column',
        yAxis: 1,
        data: this.data,
        color: this.reflect === 'OPERATE'? "#1EAD55" : this.reflect === 'DISCONNECT'? "#6D6D6D" : "#F81301",
        // color: "this.reflect === 'OPERATE'? #1EAD55 : this.reflect === 'DISCONNECT'? #6D6D6D : #F81301",
        tooltip: {
          valueSuffix: ' ',
        }
      }, 
      {
        showInLegend: false,
        name: 'Parts',
        type: 'spline',
         data: this.data1,
        color: this.reflect === 'OPERATE'? "#1EAD55" : this.reflect === 'DISCONNECT'? "#6D6D6D" : "#F81301",
        tooltip: {
          valueSuffix: ''
        }
      }
    ]
    });

 }

}

}


