import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-operator-view',
  templateUrl: './operator-view.component.html',
  styleUrls: ['./operator-view.component.scss']
})
export class OperatorViewComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    //Active
    // container1 the chart
    Highcharts.chart('container1', {
      chart: {
          type: 'column',
          height: 180
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
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Percentage'
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: 'Utilization: <b>{point.y:.1f} millions</b>'
      },
      series: [{
          name: 'Utilization',
           color: "#056B2D",
           type: undefined,
          data: [
              ['6AM', 24.2],
              ['8AM', 20.8],
              ['10AM', 14.9],
              ['12PM', 13.7],
              ['2PM', 13.1],
              ['4PM', 12.7],
              ['6PM', 12.4],
              ['8PM', 12.2]
          ],
          dataLabels: {
              enabled: false,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]
  });

    // container2 the chart
    Highcharts.chart('container2', {
      chart: {
          type: 'column',
          height: 180
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
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Percentage'
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: 'Parts: <b>{point.y:.1f} millions</b>'
      },
      series: [{
          name: 'Parts',
           color: "#056B2D",
           type: undefined,
          data: [
              ['6AM', 24.2],
              ['8AM', 20.8],
              ['10AM', 14.9],
              ['12PM', 13.7],
              ['2PM', 13.1],
              ['4PM', 12.7],
              ['6PM', 12.4],
              ['8PM', 12.2]
          ],
          dataLabels: {
              enabled: false,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]
  });

   //Stop
    // container3 the chart
    Highcharts.chart('container3', {
        chart: {
            type: 'column',
            height: 180
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
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Utilization: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Utilization',
             color: "#C91A0D",
             type: undefined,
            data: [
                ['6AM', 24.2],
                ['8AM', 20.8],
                ['10AM', 14.9],
                ['12PM', 13.7],
                ['2PM', 13.1],
                ['4PM', 12.7],
                ['6PM', 12.4],
                ['8PM', 12.2]
            ],
            dataLabels: {
                enabled: false,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
  
      // container4 the chart
      Highcharts.chart('container4', {
        chart: {
            type: 'column',
            height: 180
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
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Parts: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Parts',
             color: "#C91A0D",
             type: undefined,
            data: [
                ['6AM', 24.2],
                ['8AM', 20.8],
                ['10AM', 14.9],
                ['12PM', 13.7],
                ['2PM', 13.1],
                ['4PM', 12.7],
                ['6PM', 12.4],
                ['8PM', 12.2]
            ],
            dataLabels: {
                enabled: false,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
  }

}
