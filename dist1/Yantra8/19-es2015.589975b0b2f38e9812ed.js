(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{zrq8:function(n,t,l){"use strict";l.r(t);var e=l("8Y7J"),o=l("DnKK");class c{constructor(n,t){this.nav=n,this.service=t,this.myLoader=!1,this.date=(new Date).toString(),this.today=Date.now(),this.nav.show(),setInterval(()=>{this.today=Date.now()},1)}ngOnInit(){this.service.machine_count().pipe(Object(o.a)(this)).subscribe(n=>{console.log(n),this.count_machine=n}),this.myLoader=!0,this.service.getmachines().pipe(Object(o.a)(this)).subscribe(n=>{console.log(n),this.myLoader=!1,this.list_machine=n,console.log(this.list_machine.third[0][1]),Highcharts.chart("container",{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1,backgroundColor:"#2c2d31",spacingBottom:0,spacingTop:0,spacingRight:0,spacingLeft:0,height:"100%"},navigation:{buttonOptions:{x:-20,theme:{stroke:null,fill:"#fff",states:{hover:{fill:"#2c2d31"},select:{fill:"#fff"}}}}},menuItemStyle:{padding:"0 10px",background:"none",color:"#303030"},legend:{itemStyle:{color:"#fff"}},credits:{enabled:!1},exporting:{buttons:{contextButton:{symbolStroke:"#676767",theme:{fill:"#2c2d31"}}}},title:{text:"Total Utilization:"+this.list_machine.third[0][1]+" %",style:{color:"#fff"}},subtitle:{text:"Total Utilization:"+this.list_machine.third[0][1]+" %",align:"center",y:30,wrap:!0,verticalAlign:"middle",floating:!0,style:{color:"#fff",fontSize:"14px"}},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{colors:["#269048","#e8a249","#2E2E2E"],dataLabels:{enabled:!1,distance:-50}}},series:[{type:"pie",borderColor:"#7c7c7c",borderWidth:"1",color:"white",innerSize:"80%",data:this.list_machine.third}]}),Highcharts.chart("container2",{chart:{type:"column",backgroundColor:"#2c2d31",spacingBottom:0,spacingTop:0,spacingRight:0,spacingLeft:0},title:{text:"Individual Machine Status",style:{color:"#fff"}},legend:{itemStyle:{color:"#fff"}},credits:{enabled:!1},exporting:{buttons:{contextButton:{symbolStroke:"#676767",theme:{fill:"#2c2d31"}}}},navigation:{buttonOptions:{theme:{stroke:null,fill:"#fff",states:{hover:{fill:"#2c2d31"},select:{fill:"#fff"}}}}},xAxis:{plotLines:[{color:"#FF0000",height:3,lineColor:"#333",lineWidth:1}],categories:this.list_machine.second.Machine,labels:{style:{color:"#fff",fontSize:"14"}}},yAxis:{min:0,title:{text:""}},tooltip:{pointFormat:'<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',shared:!0},plotOptions:{column:{stacking:"normal"},labels:{style:{color:"#FFFFFF"}},series:{pointWidth:20}},series:[{name:"Disconnect",type:"column",color:"#6d6d6d",borderRadius:5,borderWidth:3,borderColor:"#2E2E2E",data:this.list_machine.second.Disconnect},{name:"stopped",type:"column",color:"#e8a249",borderWidth:3,borderRadius:5,borderColor:"#2E2E2E",data:this.list_machine.second.Stop},{name:"Running",type:"column",color:"#269048",borderWidth:3,marginBottom:6,borderRadius:5,borderColor:"#2E2E2E",fontWeight:"normal",data:this.list_machine.second.Running}]})})}ngOnDestroy(){}}class i{closeSideNav(){}}var a=l("pMnS"),s=l("NcP4"),g=l("xYTU"),u=l("t68o"),r=l("zbXB"),_=l("fo5T"),d=l("XePT"),C=l("SVse"),p=l("cXjN"),b=l("IheW");let h=(()=>{class n{constructor(n){this.http=n}getmachines(){return this.http.get("get_machine_status2")}machine_count(){return this.http.get("machine_count")}}return n.ngInjectableDef=e.Sb({factory:function(){return new n(e.Tb(b.c))},token:n,providedIn:"root"}),n})();var M=e.qb({encapsulation:0,styles:[['.machine_list[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-wrap:wrap;align-content:baseline}.list-unstyled[_ngcontent-%COMP%]{color:#fff;font-size:12px}.machine[_ngcontent-%COMP%]{position:relative;width:calc(100% / 1);color:#fff;text-align:center;background-color:#3e3e3e;font-weight:500;margin-bottom:20px;border-radius:15px}.machine[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;display:block;padding:15px}.machine[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0 0 20px}.machine[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:58px;display:block;margin:0;line-height:normal}.machine[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;display:block}.no-data[_ngcontent-%COMP%]{background-color:grey}.no-data[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{background-color:#3e3e3e}.scroll[_ngcontent-%COMP%]{height:calc(104vh - 135px);padding:24px;scroll-behavior:smooth}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track{border:0;background-color:#4a4a4a}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar{width:15px;background-color:#f5f5f5}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#1a1a1a}.pie_chart[_ngcontent-%COMP%]{background:#2c2d31;border:1px solid #5d5d5d;padding:16px;border-radius:15px}ul.pie_charts_utilizations[_ngcontent-%COMP%]{display:-webkit-box;display:flex;width:100%}ul.pie_charts_utilizations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 20px;position:relative;width:calc(100% / 1)}ul.pie_charts_utilizations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after{content:"";position:absolute;background-color:#3b3c3f;width:1px;height:90%;bottom:0;right:10px}ul.pie_charts_utilizations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after{background-color:unset}ul.pie_charts_utilizations[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:24px;width:42px}ul.pie_charts_utilizations[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;color:#fff;display:-webkit-box;display:flex;font-weight:600}ul.pie_charts_utilizations[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#a8a8a8}ul.pie_charts_utilizations[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{border-radius:10px;height:5px;width:100%;margin:4px 0;background-color:#c5c5c5}ul.pie_charts_utilizations[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar.running[_ngcontent-%COMP%]{background-color:#1ead55}ul.pie_charts_utilizations[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar.stopped[_ngcontent-%COMP%]{background-color:#3e3e3e}ul.pie_charts_utilizations[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar.no-data[_ngcontent-%COMP%]{background-color:#7d7d7d}ul.pie_charts_utilizations[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .progress-bar.idle[_ngcontent-%COMP%]{background-color:#e6a348}@media (max-width:1440px){.scroll[_ngcontent-%COMP%]{height:calc(104vh - 135px);padding:16px;scroll-behavior:smooth}ul.pie_charts_utilizations[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;color:#a8a8a8;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}ul.pie_charts_utilizations[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:18px;color:#fff}.machine[_ngcontent-%COMP%]{margin:15px 0}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]{padding:20px 0!important}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px!important}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:34px}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px!important}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]{padding:5px 10px!important}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px!important;margin:0}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px!important}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px!important}.machine[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;display:block}.machine[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:36px}.machine[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;display:block;padding:8px}}  .highcharts-figure_pie{width:70%;margin:auto}  .highcharts-a11y-proxy-button{right:-64px}.container-fluid[_ngcontent-%COMP%]{padding:20px}.stack_chart[_ngcontent-%COMP%]{background:#2c2d31;border:1px solid #5d5d5d;border-radius:15px;padding:16px}.machine.card-shimmer[_ngcontent-%COMP%]{background:#252525;height:187px}.machine.card-shimmer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.1}.sec_padding[_ngcontent-%COMP%]{padding:16px 30px}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{background-color:#2c2f34;padding:0;overflow-y:auto}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;color:#fff;margin-bottom:10px;font-weight:400}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]{box-shadow:0 0 6px 0 #202328;border-radius:8px}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]{padding:20px 0;background-color:#3e3e3e}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:18px;padding:0;font-weight:600;text-transform:capitalize}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:34px;font-weight:300;padding:5px 0}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;display:block}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]{border-top:7px solid #1ead55}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .no-data.machine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#1ead55}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .idle[_ngcontent-%COMP%]{border-top:7px solid #e8a249}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .idle.machine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#e8a249}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .idleb[_ngcontent-%COMP%]{color:#e8a24a}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .skill-2[_ngcontent-%COMP%]   stop[_ngcontent-%COMP%]{background-color:#e8a24a}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .stopped[_ngcontent-%COMP%]{border-top:7px solid #ed5550}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .stopped.machine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ed5550}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .running[_ngcontent-%COMP%]{border-top:7px solid #207a24}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_machines[_ngcontent-%COMP%]   .running.machine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#207a24}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]{background-color:#3e3e3e;text-align:left;padding:10px}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:18px;padding:0;font-weight:600;text-transform:capitalize}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;display:block}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:34px;font-weight:300;text-align:right;margin:0}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.no-data[_ngcontent-%COMP%]{border-left:7px solid #1ead55}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.no-data[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#1ead55}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.disconnect[_ngcontent-%COMP%]{border-left:7px solid #6d6d6d}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.disconnect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#6d6d6d}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.idle[_ngcontent-%COMP%]{border-left:7px solid #e8a249}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.idle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#e8a249}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.stopped[_ngcontent-%COMP%]{border-left:7px solid #ed5550}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.stopped[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ed5550}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.running[_ngcontent-%COMP%]{border-left:7px solid #207a24}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.two_more_machines[_ngcontent-%COMP%]   .machine.running[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#207a24}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.high_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;padding:2px 5px;margin-bottom:2px;border-radius:5px}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.high_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin:0;padding:0;background-color:transparent;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.high_machines[_ngcontent-%COMP%]   .machine[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:12px;margin:0;font-weight:400}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.high_machines[_ngcontent-%COMP%]   .machine.no-data[_ngcontent-%COMP%]{background-color:#1ead55}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.high_machines[_ngcontent-%COMP%]   .machine.idle[_ngcontent-%COMP%]{background-color:#e8a249}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.high_machines[_ngcontent-%COMP%]   .machine.stopped[_ngcontent-%COMP%]{background-color:#ed5550}.page[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .machine_list.high_machines[_ngcontent-%COMP%]   .machine.running[_ngcontent-%COMP%]{background-color:#207a24}.page[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%]{display:block;overflow:auto;background:#262932;scroll-behavior:smooth;overflow-y:auto}.page[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%]   .page_sec_title[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.page[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%]   .page_sec_title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px;color:#fff;font-weight:400}.page[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%]   .page_sec_title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center}.page[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%]   .page_sec_title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:10px}.page[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%]   .page_sec_title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#9c9c9c;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.page[_ngcontent-%COMP%]   .content-inner[_ngcontent-%COMP%]   .page_sec_title[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:16px;margin-right:5px;color:#828383}.highcharts-container[_ngcontent-%COMP%]{position:inherit!important}progress[_ngcontent-%COMP%], progress[role][_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background-size:auto;border-radius:50px;overflow:hidden;height:6px;width:100%}.progress-bar.running[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#1ead55}.progress-bar.stop[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#ed5550}.progress-bar.idle[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#e6a444}.progress-bar.no-data[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#6d6d6d}.progress-bar.running[_ngcontent-%COMP%]::-moz-progress-bar{background-color:#1ead55}.progress-bar.stop[_ngcontent-%COMP%]::-moz-progress-bar{background-color:#ed5550}.progress-bar.idle[_ngcontent-%COMP%]::-moz-progress-bar{background-color:#e6a444}.progress-bar.no-data[_ngcontent-%COMP%]::-moz-progress-bar{background-color:#6d6d6d}@-webkit-keyframes bar-fill{0%{width:0}}@keyframes bar-fill{0%{width:0}}']],data:{}});function O(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,6,"div",[["class","machine disconnect"]],[[2,"idle",null],[2,"running",null],[2,"no-data",null]],null,null,null,null)),(n()(),e.sb(1,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Mb(2,null,["",""])),(n()(),e.sb(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Machine Utilized"])),(n()(),e.sb(5,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Mb(6,null,["","%"]))],null,(function(n,t){n(t,0,0,"STOP"===t.context.$implicit.status,"OPERATE"===t.context.$implicit.status,"DISCONNECT"===t.context.$implicit.status),n(t,2,0,t.context.$implicit.name),n(t,6,0,t.context.$implicit.utlization)}))}function P(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function m(n){return e.Ob(0,[e.Gb(0,C.e,[e.t]),(n()(),e.sb(1,0,null,null,56,"section",[["class","page"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,55,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,5,"div",[["class","col-lg-2 col-md-4 sidenav"]],null,null,null,null,null)),(n()(),e.sb(4,0,null,null,4,"div",[["class","machine_list scroll two_more_machines"]],null,null,null,null,null)),(n()(),e.sb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Mb(6,null,["Total Machines:",""])),(n()(),e.hb(16777216,null,null,1,null,O)),e.rb(8,278528,null,0,C.k,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(n()(),e.sb(9,0,null,null,48,"div",[["class","col-lg-10 col-md-8 content-inner sec_padding"]],null,null,null,null,null)),(n()(),e.sb(10,0,null,null,13,"div",[["class","page_sec_title"]],null,null,null,null,null)),(n()(),e.sb(11,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Dashboard"])),(n()(),e.sb(13,0,null,null,10,"ul",[["class","list-unstyled"]],null,null,null,null,null)),(n()(),e.sb(14,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),e.sb(15,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Date:"])),(n()(),e.Mb(17,null,[" "," "])),e.Ib(18,2),(n()(),e.sb(19,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),e.sb(20,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Time:"])),(n()(),e.Mb(22,null,[" "," "])),e.Ib(23,2),(n()(),e.sb(24,0,null,null,33,"div",[["class","row inner_sec"]],null,null,null,null,null)),(n()(),e.sb(25,0,null,null,28,"div",[["class","col-lg-6 col-md-12 mb-2"]],null,null,null,null,null)),(n()(),e.sb(26,0,null,null,27,"div",[["class","pie_chart"]],null,null,null,null,null)),(n()(),e.sb(27,0,null,null,1,"figure",[["class","highcharts-figure_pie"]],null,null,null,null,null)),(n()(),e.sb(28,0,null,null,0,"div",[["id","container"]],null,null,null,null,null)),(n()(),e.sb(29,0,null,null,24,"ul",[["class","list-unstyled pie_charts_utilizations my-3"]],null,null,null,null,null)),(n()(),e.sb(30,0,null,null,7,"li",[],null,null,null,null,null)),(n()(),e.sb(31,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,[" Running"])),(n()(),e.sb(33,0,null,null,2,"progress",[["class","progress-bar running"],["max","100"]],[[8,"value",0]],null,null,null,null)),(n()(),e.sb(34,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Skill Level: 75%"])),(n()(),e.sb(36,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(37,null,["","%"])),(n()(),e.sb(38,0,null,null,7,"li",[],null,null,null,null,null)),(n()(),e.sb(39,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,[" Stop"])),(n()(),e.sb(41,0,null,null,2,"progress",[["class","progress-bar idle"],["max","100"]],[[8,"value",0]],null,null,null,null)),(n()(),e.sb(42,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Skill Level: 75%"])),(n()(),e.sb(44,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(45,null,["","%"])),(n()(),e.sb(46,0,null,null,7,"li",[],null,null,null,null,null)),(n()(),e.sb(47,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,[" Disconnect"])),(n()(),e.sb(49,0,null,null,2,"progress",[["class","progress-bar no-data"],["max","100"]],[[8,"value",0]],null,null,null,null)),(n()(),e.sb(50,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),e.Mb(-1,null,["Skill Level: 75%"])),(n()(),e.sb(52,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Mb(53,null,["","%"])),(n()(),e.sb(54,0,null,null,3,"div",[["class","col-lg-6 col-md-12"]],null,null,null,null,null)),(n()(),e.sb(55,0,null,null,2,"div",[["class","stack_chart"]],null,null,null,null,null)),(n()(),e.sb(56,0,null,null,1,"figure",[["class","highcharts-figure_col"]],null,null,null,null,null)),(n()(),e.sb(57,0,null,null,0,"div",[["id","container2"]],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,1,null,P)),e.rb(59,16384,null,0,C.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var l=t.component;n(t,8,0,null==l.list_machine?null:l.list_machine.first),n(t,59,0,l.myLoader)}),(function(n,t){var l=t.component;n(t,6,0,null==l.count_machine?null:l.count_machine.total_count);var o=e.Nb(t,17,0,n(t,18,0,e.Eb(t,0),l.today,"dd-MM-yyyy"));n(t,17,0,o);var c=e.Nb(t,22,0,n(t,23,0,e.Eb(t,0),l.today,"h:mm:ss a"));n(t,22,0,c),n(t,33,0,e.wb(1,"",null==l.list_machine?null:l.list_machine.third[0][1],"")),n(t,37,0,null==l.list_machine?null:l.list_machine.third[0][1]),n(t,41,0,e.wb(1,"",null==l.list_machine?null:l.list_machine.third[1][1],"")),n(t,45,0,null==l.list_machine?null:l.list_machine.third[1][1]),n(t,49,0,e.wb(1,"",null==l.list_machine?null:l.list_machine.third[2][1],"")),n(t,53,0,null==l.list_machine?null:l.list_machine.third[2][1])}))}function f(n){return e.Ob(0,[(n()(),e.sb(0,0,null,null,1,"app-dashboard",[],null,null,null,m,M)),e.rb(1,245760,null,0,c,[p.a,h],null,null)],(function(n,t){n(t,1,0)}),null)}var x=e.ob("app-dashboard",c,f,{},{},[]),w=l("s7LF"),v=l("QQfA"),k=l("IP0z"),y=l("gavF"),z=l("POq0"),S=l("Xd0L"),E=l("/Co4"),j=l("JjoW"),F=l("cUpR"),L=l("/HVE"),D=l("qJ5m"),I=l("Mz6y"),T=l("5GAg"),B=l("DkaU"),R=l("s6ns"),W=l("821u"),q=l("OIZN"),A=l("Wc//"),N=l("iInd"),J=l("Fwaw"),U=l("zMNK"),H=l("hOhj"),V=l("Gi4r"),Z=l("oapL"),Q=l("HsOI"),$=l("ZwOa"),X=l("igqZ"),G=l("02hT"),K=l("Q+lL"),Y=l("pBi1"),nn=l("lT8R"),tn=l("BV1i"),ln=l("elxJ"),en=l("5Bek"),on=l("c9fC"),cn=l("FVPZ"),an=l("qJ50"),sn=l("AaDx"),gn=l("mkRZ"),un=l("dFDH"),rn=l("rWV4"),_n=l("zQui"),dn=l("8rEH"),Cn=l("r0V8"),pn=l("10VE"),bn=l("BzsH"),hn=l("cw5Z"),Mn=l("EApP"),On=l("1Q6g"),Pn=l("JUyF");l.d(t,"DashboardModuleNgFactory",(function(){return mn}));var mn=e.pb(i,[],(function(n){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[a.a,s.a,g.a,g.b,u.a,r.b,r.a,_.c,d.a,x]],[3,e.j],e.w]),e.Cb(4608,C.n,C.m,[e.t,[2,C.E]]),e.Cb(4608,w.A,w.A,[]),e.Cb(4608,w.g,w.g,[]),e.Cb(4608,v.c,v.c,[v.i,v.e,e.j,v.h,v.f,e.q,e.y,C.d,k.b,[2,C.h]]),e.Cb(5120,v.j,v.k,[v.c]),e.Cb(5120,y.c,y.j,[v.c]),e.Cb(4608,z.c,z.c,[]),e.Cb(4608,S.b,S.b,[]),e.Cb(5120,E.a,E.b,[v.c]),e.Cb(5120,j.a,j.b,[v.c]),e.Cb(4608,F.e,S.c,[[2,S.g],[2,S.l]]),e.Cb(4608,S.a,S.w,[[2,S.f],L.a]),e.Cb(5120,D.b,D.a,[[3,D.b]]),e.Cb(5120,I.b,I.c,[v.c]),e.Cb(135680,T.h,T.h,[e.y,L.a]),e.Cb(4608,B.e,B.e,[e.L]),e.Cb(5120,R.c,R.d,[v.c]),e.Cb(135680,R.e,R.e,[v.c,e.q,[2,C.h],[2,R.b],R.c,[3,R.e],v.e]),e.Cb(4608,W.i,W.i,[]),e.Cb(5120,W.a,W.b,[v.c]),e.Cb(5120,q.c,q.a,[[3,q.c]]),e.Cb(4608,A.a,A.a,[]),e.Cb(4608,h,h,[b.c]),e.Cb(1073742336,N.o,N.o,[[2,N.t],[2,N.k]]),e.Cb(1073742336,C.c,C.c,[]),e.Cb(1073742336,w.z,w.z,[]),e.Cb(1073742336,w.k,w.k,[]),e.Cb(1073742336,w.w,w.w,[]),e.Cb(1073742336,k.a,k.a,[]),e.Cb(1073742336,S.l,S.l,[[2,S.d],[2,F.f]]),e.Cb(1073742336,L.b,L.b,[]),e.Cb(1073742336,S.v,S.v,[]),e.Cb(1073742336,J.c,J.c,[]),e.Cb(1073742336,U.g,U.g,[]),e.Cb(1073742336,H.c,H.c,[]),e.Cb(1073742336,v.g,v.g,[]),e.Cb(1073742336,y.i,y.i,[]),e.Cb(1073742336,y.f,y.f,[]),e.Cb(1073742336,V.c,V.c,[]),e.Cb(1073742336,Z.c,Z.c,[]),e.Cb(1073742336,z.d,z.d,[]),e.Cb(1073742336,Q.e,Q.e,[]),e.Cb(1073742336,$.c,$.c,[]),e.Cb(1073742336,X.e,X.e,[]),e.Cb(1073742336,S.m,S.m,[]),e.Cb(1073742336,S.t,S.t,[]),e.Cb(1073742336,G.a,G.a,[]),e.Cb(1073742336,K.c,K.c,[]),e.Cb(1073742336,S.q,S.q,[]),e.Cb(1073742336,E.c,E.c,[]),e.Cb(1073742336,j.d,j.d,[]),e.Cb(1073742336,Y.b,Y.b,[]),e.Cb(1073742336,Y.a,Y.a,[]),e.Cb(1073742336,nn.a,nn.a,[]),e.Cb(1073742336,tn.h,tn.h,[]),e.Cb(1073742336,S.x,S.x,[]),e.Cb(1073742336,S.n,S.n,[]),e.Cb(1073742336,ln.a,ln.a,[]),e.Cb(1073742336,en.c,en.c,[]),e.Cb(1073742336,on.a,on.a,[]),e.Cb(1073742336,cn.a,cn.a,[]),e.Cb(1073742336,an.e,an.e,[]),e.Cb(1073742336,D.c,D.c,[]),e.Cb(1073742336,T.a,T.a,[]),e.Cb(1073742336,I.e,I.e,[]),e.Cb(1073742336,B.c,B.c,[]),e.Cb(1073742336,sn.a,sn.a,[]),e.Cb(1073742336,gn.a,gn.a,[]),e.Cb(1073742336,un.d,un.d,[]),e.Cb(1073742336,rn.j,rn.j,[]),e.Cb(1073742336,R.k,R.k,[]),e.Cb(1073742336,_n.p,_n.p,[]),e.Cb(1073742336,dn.m,dn.m,[]),e.Cb(1073742336,W.j,W.j,[]),e.Cb(1073742336,Cn.b,Cn.b,[]),e.Cb(1073742336,Cn.a,Cn.a,[]),e.Cb(1073742336,pn.i,pn.i,[]),e.Cb(1073742336,bn.b,bn.b,[]),e.Cb(1073742336,q.d,q.d,[]),e.Cb(1073742336,hn.h,hn.h,[]),e.Cb(1073742336,Mn.i,Mn.i,[]),e.Cb(1073742336,On.a,On.a,[]),e.Cb(1073742336,Pn.a,Pn.a,[]),e.Cb(1073742336,i,i,[]),e.Cb(256,S.e,S.i,[]),e.Cb(256,hn.p,"en-US",[]),e.Cb(256,Mn.b,{default:Mn.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),e.Cb(1024,N.i,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);