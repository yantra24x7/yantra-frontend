function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{W3FM:function(l,n,e){"use strict";e.r(n);var t,u=e("8Y7J"),a=e("SVse"),i=e("PSD3"),r=e.n(i),o=function(){function l(n,e,t,u,a){_classCallCheck(this,l),this.nav=n,this.datePipe=e,this.service=t,this.fb=u,this.exportService=a,this.today=new Date((new Date).toDateString()),this.weekStart=new Date(new Date((new Date).setDate((new Date).getDate()-((new Date).getDay()+7)%7)).toDateString()),this.weekEnd=new Date(new Date((new Date).setDate(new Date((new Date).setDate((new Date).getDate()-((new Date).getDay()+7)%7)).getDate()+6)).toDateString()),this.monthStart=new Date(new Date((new Date).setDate(1)).toDateString()),this.monthEnd=this.today,this.lastStart=new Date(new Date(new Date((new Date).setMonth((new Date).getMonth()-1)).setDate(1)).toDateString()),this.lastEnd=this.today,this.yearStart=new Date(new Date((new Date).setDate((new Date).getDate()-365)).toDateString()),this.yearEnd=this.today,this.currentYear=this.today.getFullYear(),this.currentMonth=this.today.getMonth(),this.maxDate=new Date,this.minDate=new Date((new Date).setMonth((new Date).getMonth()-1)),this.myLoader=!1,this.export_excel=[],this.nav.show()}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.login=this.fb.group({machine_name:[""],shift_num:[""],date:[""]}),this.service.getmachines().subscribe((function(n){l.machine_response=n,l.login.patchValue({machine_name:l.machine_response[0]}),l.service.getshift().subscribe((function(n){l.shift_response=n,l.login.patchValue({shift_num:l.shift_response[0].shift_no}),l.service.first_page_loading().subscribe((function(n){l.first_loading=n,l.login.patchValue({date:[l.first_loading.from_date,l.first_loading.to_date]}),l.logintest("true")}))}))}))}},{key:"export",value:function(){var l=this;this.service.overall_report({machine_name:this.login.value.machine_name,shift_num:this.login.value.shift_num,date:this.new_date+"-"+this.new_date1}).subscribe((function(n){if(l.myLoader=!1,l.get_report=n,0==l.get_report.length)r.a.fire("Exporting!, No Data Found");else{for(var e=0;e<l.get_report.length;e++)l.export_excel.push({"S.No":e+1,Date:l.get_report[e].date||"---",Shift:l.get_report[e].shift_num||"---","Machine Name":l.get_report[e].machine_name||"---","Program Number":l.get_report[e].program_number||"---","Result Accumulative":l.get_report[e].productresult_accumulate||"---","Product Name":l.get_report[e].productname||"---","Product Result":l.get_report[e].productresult||"---","Accept Count":l.get_report[e].accept_count||"---","Reject Count":l.get_report[e].reject_count||"---","Start Time":l.get_report[e].part_start_time||"---","End Time":l.get_report[e].part_start_time||"---"});l.exportService.exportAsExcelFile(l.export_excel,"Report Details")}}))}},{key:"logintest",value:function(l){var n=this;this.status=l,this.myLoader=!0,console.log(this.minDate),console.log(this.login.value),"true"==this.status&&(this.new_date=new a.e("en-US").transform(this.login.value.date[0],"MM/dd/yyyy"),this.new_date1=new a.e("en-US").transform(this.login.value.date[1],"MM/dd/yyyy"),this.service.overall_report({machine_name:this.login.value.machine_name,shift_num:this.login.value.shift_num,date:this.new_date+"-"+this.new_date1}).subscribe((function(l){n.myLoader=!1,n.get_report=l})))}}]),l}(),b=function l(){_classCallCheck(this,l)},s=e("pMnS"),d=e("NcP4"),c=e("xYTU"),p=e("t68o"),m=e("zbXB"),h=e("fo5T"),g=e("XePT"),f=e("MlvX"),_=e("Xd0L"),E=e("s7LF"),C=e("dJrM"),v=e("HsOI"),w=e("IP0z"),y=e("/HVE"),k=e("omvX"),D=e("Azqq"),x=e("JjoW"),S=e("hOhj"),M=e("5GAg"),F=e("U0Oa"),q=e("10VE"),K=e("bujt"),O=e("Fwaw"),P=e("lzlj"),I=e("igqZ"),j=e("cXjN"),A=e("IheW"),L=((t=function(){function l(n){_classCallCheck(this,l),this.http=n}return _createClass(l,[{key:"getmachines",value:function(){return this.http.get("machine_list")}},{key:"getshift",value:function(){return this.http.get("shifts")}},{key:"overall_report",value:function(l){return this.http.get("production_part_report?machine_name="+l.machine_name+"&&shift_num="+l.shift_num+"&&from_date="+l.date)}},{key:"first_page_loading",value:function(){return this.http.get("previous_shift")}}]),l}()).ngInjectableDef=u.Sb({factory:function(){return new t(u.Tb(A.c))},token:t,providedIn:"root"}),t),N=e("Wc//"),T=u.qb({encapsulation:0,styles:[[".table_wrapper[_ngcontent-%COMP%]{overflow-y:scroll;overflow-x:scroll;margin-top:20px}"]],data:{}});function $(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Eb(l,1)._selectViaInteraction()&&t),"keydown"===n&&(t=!1!==u.Eb(l,1)._handleKeydown(e)&&t),t}),f.c,f.a)),u.rb(1,8568832,[[10,4]],0,_.p,[u.k,u.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),u.Mb(2,0,[" "," "]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,0,0,u.Eb(n,1)._getTabIndex(),u.Eb(n,1).selected,u.Eb(n,1).multiple,u.Eb(n,1).active,u.Eb(n,1).id,u.Eb(n,1)._getAriaSelected(),u.Eb(n,1).disabled.toString(),u.Eb(n,1).disabled),l(n,2,0,n.context.$implicit)}))}function J(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Eb(l,1)._selectViaInteraction()&&t),"keydown"===n&&(t=!1!==u.Eb(l,1)._handleKeydown(e)&&t),t}),f.c,f.a)),u.rb(1,8568832,[[22,4]],0,_.p,[u.k,u.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),u.Mb(2,0,[" "," "]))],(function(l,n){l(n,1,0,n.context.$implicit.shift_no)}),(function(l,n){l(n,0,0,u.Eb(n,1)._getTabIndex(),u.Eb(n,1).selected,u.Eb(n,1).multiple,u.Eb(n,1).active,u.Eb(n,1).id,u.Eb(n,1)._getAriaSelected(),u.Eb(n,1).disabled.toString(),u.Eb(n,1).disabled),l(n,2,0,n.context.$implicit.shift_no)}))}function V(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,27,"tbody",[],null,null,null,null,null)),(l()(),u.sb(1,0,null,null,26,"tr",[],null,null,null,null,null)),(l()(),u.sb(2,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(3,null,["",""])),(l()(),u.sb(4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(5,null,["",""])),(l()(),u.sb(6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(7,null,["",""])),(l()(),u.sb(8,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(9,null,["",""])),(l()(),u.sb(10,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(11,null,["",""])),(l()(),u.sb(12,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(13,null,["",""])),(l()(),u.sb(14,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(15,null,["",""])),(l()(),u.sb(16,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(17,null,["",""])),(l()(),u.sb(18,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["---"])),(l()(),u.sb(20,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["---"])),(l()(),u.sb(22,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u.Mb(23,null,["",""])),u.Ib(24,2),(l()(),u.sb(25,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u.Mb(26,null,["",""])),u.Ib(27,2)],null,(function(l,n){l(n,3,0,n.context.index+1),l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.date),l(n,7,0,null==n.context.$implicit?null:n.context.$implicit.shift_num),l(n,9,0,null==n.context.$implicit?null:n.context.$implicit.machine_name),l(n,11,0,(null==n.context.$implicit?null:n.context.$implicit.program_number)||"---"),l(n,13,0,(null==n.context.$implicit?null:n.context.$implicit.productresult_accumulate)||"---"),l(n,15,0,null==n.context.$implicit?null:n.context.$implicit.productname),l(n,17,0,null==n.context.$implicit?null:n.context.$implicit.productresult);var e=u.Nb(n,23,0,l(n,24,0,u.Eb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.part_start_time,"yyyy-MM-dd ; HH:mm:ss"));l(n,23,0,e);var t=u.Nb(n,26,0,l(n,27,0,u.Eb(n.parent,0),null==n.context.$implicit?null:n.context.$implicit.part_end_time,"yyyy-MM-dd ; HH:mm:ss"));l(n,26,0,t)}))}function R(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"div",[["class","spinner"]],null,null,null,null,null)),(l()(),u.sb(1,0,null,null,0,"img",[["src","assets/images/spinner.gif"]],null,null,null,null,null))],null,null)}function B(l){return u.Ob(0,[u.Gb(0,a.e,[u.t]),(l()(),u.sb(1,0,null,null,132,"section",[["class","page"]],null,null,null,null,null)),(l()(),u.sb(2,0,null,null,129,"div",[["class","container_fluid pt-3"]],null,null,null,null,null)),(l()(),u.sb(3,0,null,null,0,"div",[["class","page_title_sec"]],null,null,null,null,null)),(l()(),u.sb(4,0,null,null,92,"div",[["class","filter_sec mt-10"]],null,null,null,null,null)),(l()(),u.sb(5,0,null,null,87,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,e){var t=!0,a=l.component;return"submit"===n&&(t=!1!==u.Eb(l,7).onSubmit(e)&&t),"reset"===n&&(t=!1!==u.Eb(l,7).onReset()&&t),"ngSubmit"===n&&(t=!1!==a.logintest("true")&&t),t}),null,null)),u.rb(6,16384,null,0,E.C,[],null,null),u.rb(7,540672,null,0,E.i,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u.Jb(2048,null,E.d,null,[E.i]),u.rb(9,16384,null,0,E.r,[[4,E.d]],null,null),(l()(),u.sb(10,0,null,null,82,"div",[["class","filter_fields"]],null,null,null,null,null)),(l()(),u.sb(11,0,null,null,28,"div",[["class","filter_field"]],null,null,null,null,null)),(l()(),u.sb(12,0,null,null,27,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,C.b,C.a)),u.rb(13,7520256,null,9,v.c,[u.k,u.h,[2,_.h],[2,w.b],[2,v.a],y.a,u.y,[2,k.a]],{appearance:[0,"appearance"]},null),u.Kb(603979776,1,{_controlNonStatic:0}),u.Kb(335544320,2,{_controlStatic:0}),u.Kb(603979776,3,{_labelChildNonStatic:0}),u.Kb(335544320,4,{_labelChildStatic:0}),u.Kb(603979776,5,{_placeholderChild:0}),u.Kb(603979776,6,{_errorChildren:1}),u.Kb(603979776,7,{_hintChildren:1}),u.Kb(603979776,8,{_prefixChildren:1}),u.Kb(603979776,9,{_suffixChildren:1}),(l()(),u.sb(23,0,null,1,16,"mat-select",[["class","mat-select"],["formControlName","machine_name"],["matNativeControl",""],["placeholder","Select Machine"],["required",""],["role","listbox"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,e){var t=!0;return"keydown"===n&&(t=!1!==u.Eb(l,29)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==u.Eb(l,29)._onFocus()&&t),"blur"===n&&(t=!1!==u.Eb(l,29)._onBlur()&&t),t}),D.b,D.a)),u.rb(24,16384,null,0,E.x,[],{required:[0,"required"]},null),u.Jb(1024,null,E.n,(function(l){return[l]}),[E.x]),u.rb(26,671744,null,0,E.h,[[3,E.d],[6,E.n],[8,null],[8,null],[2,E.B]],{name:[0,"name"]},null),u.Jb(2048,null,E.p,null,[E.h]),u.rb(28,16384,null,0,E.q,[[4,E.p]],null,null),u.rb(29,2080768,null,3,x.c,[S.e,u.h,u.y,_.b,u.k,[2,w.b],[2,E.s],[2,E.i],[2,v.c],[6,E.p],[8,null],x.a,M.j],{placeholder:[0,"placeholder"],required:[1,"required"]},null),u.Kb(603979776,10,{options:1}),u.Kb(603979776,11,{optionGroups:1}),u.Kb(603979776,12,{customTrigger:0}),u.Jb(2048,[[1,4],[2,4]],v.d,null,[x.c]),u.Jb(2048,null,_.j,null,[x.c]),(l()(),u.sb(35,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"],["value","all"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Eb(l,36)._selectViaInteraction()&&t),"keydown"===n&&(t=!1!==u.Eb(l,36)._handleKeydown(e)&&t),t}),f.c,f.a)),u.rb(36,8568832,[[10,4]],0,_.p,[u.k,u.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),u.Mb(-1,0,["All"])),(l()(),u.hb(16777216,null,1,1,null,$)),u.rb(39,278528,null,0,a.k,[u.O,u.L,u.r],{ngForOf:[0,"ngForOf"]},null),(l()(),u.sb(40,0,null,null,28,"div",[["class","filter_field"]],null,null,null,null,null)),(l()(),u.sb(41,0,null,null,27,"mat-form-field",[["appearance","outline"],["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,C.b,C.a)),u.rb(42,7520256,null,9,v.c,[u.k,u.h,[2,_.h],[2,w.b],[2,v.a],y.a,u.y,[2,k.a]],{appearance:[0,"appearance"]},null),u.Kb(603979776,13,{_controlNonStatic:0}),u.Kb(335544320,14,{_controlStatic:0}),u.Kb(603979776,15,{_labelChildNonStatic:0}),u.Kb(335544320,16,{_labelChildStatic:0}),u.Kb(603979776,17,{_placeholderChild:0}),u.Kb(603979776,18,{_errorChildren:1}),u.Kb(603979776,19,{_hintChildren:1}),u.Kb(603979776,20,{_prefixChildren:1}),u.Kb(603979776,21,{_suffixChildren:1}),(l()(),u.sb(52,0,null,1,16,"mat-select",[["class","mat-select"],["formControlName","shift_num"],["matNativeControl",""],["placeholder","Select Shift"],["required",""],["role","listbox"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null]],[[null,"keydown"],[null,"focus"],[null,"blur"]],(function(l,n,e){var t=!0;return"keydown"===n&&(t=!1!==u.Eb(l,58)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==u.Eb(l,58)._onFocus()&&t),"blur"===n&&(t=!1!==u.Eb(l,58)._onBlur()&&t),t}),D.b,D.a)),u.rb(53,16384,null,0,E.x,[],{required:[0,"required"]},null),u.Jb(1024,null,E.n,(function(l){return[l]}),[E.x]),u.rb(55,671744,null,0,E.h,[[3,E.d],[6,E.n],[8,null],[8,null],[2,E.B]],{name:[0,"name"]},null),u.Jb(2048,null,E.p,null,[E.h]),u.rb(57,16384,null,0,E.q,[[4,E.p]],null,null),u.rb(58,2080768,null,3,x.c,[S.e,u.h,u.y,_.b,u.k,[2,w.b],[2,E.s],[2,E.i],[2,v.c],[6,E.p],[8,null],x.a,M.j],{placeholder:[0,"placeholder"],required:[1,"required"]},null),u.Kb(603979776,22,{options:1}),u.Kb(603979776,23,{optionGroups:1}),u.Kb(603979776,24,{customTrigger:0}),u.Jb(2048,[[13,4],[14,4]],v.d,null,[x.c]),u.Jb(2048,null,_.j,null,[x.c]),(l()(),u.sb(64,0,null,1,2,"mat-option",[["class","mat-option"],["role","option"],["value","all"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Eb(l,65)._selectViaInteraction()&&t),"keydown"===n&&(t=!1!==u.Eb(l,65)._handleKeydown(e)&&t),t}),f.c,f.a)),u.rb(65,8568832,[[22,4]],0,_.p,[u.k,u.h,[2,_.j],[2,_.o]],{value:[0,"value"]},null),(l()(),u.Mb(-1,0,["All"])),(l()(),u.hb(16777216,null,1,1,null,J)),u.rb(68,278528,null,0,a.k,[u.O,u.L,u.r],{ngForOf:[0,"ngForOf"]},null),(l()(),u.sb(69,0,null,null,20,"div",[["class","filter_field date_picker"],["color","primary"]],null,null,null,null,null)),(l()(),u.sb(70,16777216,null,null,19,"ejs-daterangepicker",[["formControlName","date"],["placeholder","Select a range"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.daterangepicker.open()&&t),t}),F.b,F.a)),u.rb(71,6537216,null,3,q.h,[u.k,u.D,u.O,u.q],{placeholder:[0,"placeholder"]},null),u.Kb(335544320,25,{childPresets:0}),u.Kb(335544320,26,{start:0}),u.Kb(335544320,27,{end:0}),u.Jb(1024,null,E.o,(function(l){return[l]}),[q.h]),u.rb(76,671744,null,0,E.h,[[3,E.d],[8,null],[8,null],[6,E.o],[2,E.B]],{name:[0,"name"]},null),u.Jb(2048,null,E.p,null,[E.h]),u.rb(78,16384,null,0,E.q,[[4,E.p]],null,null),(l()(),u.sb(79,0,null,null,10,"e-presets",[],null,null,null,null,null)),u.rb(80,7421952,[[25,4]],1,q.n,[],null,null),u.Kb(603979776,28,{children:1}),(l()(),u.sb(82,16777216,null,null,1,"e-preset",[["label","This Week"]],null,null,null,null,null)),u.rb(83,11091968,[[28,4]],0,q.m,[u.O],{end:[0,"end"],label:[1,"label"],start:[2,"start"]},null),(l()(),u.sb(84,16777216,null,null,1,"e-preset",[["label","This Month"]],null,null,null,null,null)),u.rb(85,11091968,[[28,4]],0,q.m,[u.O],{end:[0,"end"],label:[1,"label"],start:[2,"start"]},null),(l()(),u.sb(86,16777216,null,null,1,"e-preset",[["label","Last Month"]],null,null,null,null,null)),u.rb(87,11091968,[[28,4]],0,q.m,[u.O],{end:[0,"end"],label:[1,"label"],start:[2,"start"]},null),(l()(),u.sb(88,16777216,null,null,1,"e-preset",[["label","Last Year"]],null,null,null,null,null)),u.rb(89,11091968,[[28,4]],0,q.m,[u.O],{end:[0,"end"],label:[1,"label"],start:[2,"start"]},null),(l()(),u.sb(90,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,K.b,K.a)),u.rb(91,180224,null,0,O.b,[u.k,M.h,[2,k.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),u.Mb(-1,0,["Submit"])),(l()(),u.sb(93,0,null,null,3,"div",[["class","table_export"]],null,null,null,null,null)),(l()(),u.sb(94,0,null,null,2,"button",[["class","export_btn"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.export()&&t),t}),K.b,K.a)),u.rb(95,180224,null,0,O.b,[u.k,M.h,[2,k.a]],null,null),(l()(),u.Mb(-1,0,[" Export"])),(l()(),u.sb(97,0,null,null,34,"mat-card",[["class","card_sec mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,P.b,P.a)),u.rb(98,49152,null,0,I.a,[[2,k.a]],null,null),(l()(),u.sb(99,0,null,0,32,"div",[["class","table_wrapper"]],null,null,null,null,null)),(l()(),u.sb(100,0,null,null,31,"table",[["class","table"]],null,null,null,null,null)),(l()(),u.sb(101,0,null,null,28,"thead",[],null,null,null,null,null)),(l()(),u.sb(102,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),u.sb(103,0,null,null,1,"th",[["rowspan","2"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["S.no"])),(l()(),u.sb(105,0,null,null,1,"th",[["rowspan","2"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Date"])),(l()(),u.sb(107,0,null,null,1,"th",[["rowspan","2"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Shift"])),(l()(),u.sb(109,0,null,null,1,"th",[["rowspan","2"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Machine Name"])),(l()(),u.sb(111,0,null,null,1,"th",[["colspan","11"]],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Production Details"])),(l()(),u.sb(113,0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),u.sb(114,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Program No"])),(l()(),u.sb(116,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Product Result accumulative"])),(l()(),u.sb(118,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Product Name"])),(l()(),u.sb(120,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Product Result"])),(l()(),u.sb(122,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Accept Count"])),(l()(),u.sb(124,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Reject Count"])),(l()(),u.sb(126,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["Start Time"])),(l()(),u.sb(128,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),u.Mb(-1,null,["End Time"])),(l()(),u.hb(16777216,null,null,1,null,V)),u.rb(131,278528,null,0,a.k,[u.O,u.L,u.r],{ngForOf:[0,"ngForOf"]},null),(l()(),u.hb(16777216,null,null,1,null,R)),u.rb(133,16384,null,0,a.l,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,7,0,e.login),l(n,13,0,"outline"),l(n,24,0,""),l(n,26,0,"machine_name"),l(n,29,0,"Select Machine",""),l(n,36,0,"all"),l(n,39,0,e.machine_response),l(n,42,0,"outline"),l(n,53,0,""),l(n,55,0,"shift_num"),l(n,58,0,"Select Shift",""),l(n,65,0,"all"),l(n,68,0,e.shift_response),l(n,71,0,"Select a range"),l(n,76,0,"date"),l(n,80,0),l(n,83,0,e.weekEnd,"This Week",e.weekStart),l(n,85,0,e.monthEnd,"This Month",e.monthStart),l(n,87,0,e.lastEnd,"Last Month",e.lastStart),l(n,89,0,e.yearEnd,"Last Year",e.yearStart),l(n,91,0,e.login.invalid,"primary"),l(n,131,0,e.get_report),l(n,133,0,e.myLoader)}),(function(l,n){l(n,5,0,u.Eb(n,9).ngClassUntouched,u.Eb(n,9).ngClassTouched,u.Eb(n,9).ngClassPristine,u.Eb(n,9).ngClassDirty,u.Eb(n,9).ngClassValid,u.Eb(n,9).ngClassInvalid,u.Eb(n,9).ngClassPending),l(n,12,1,["standard"==u.Eb(n,13).appearance,"fill"==u.Eb(n,13).appearance,"outline"==u.Eb(n,13).appearance,"legacy"==u.Eb(n,13).appearance,u.Eb(n,13)._control.errorState,u.Eb(n,13)._canLabelFloat,u.Eb(n,13)._shouldLabelFloat(),u.Eb(n,13)._hasFloatingLabel(),u.Eb(n,13)._hideControlPlaceholder(),u.Eb(n,13)._control.disabled,u.Eb(n,13)._control.autofilled,u.Eb(n,13)._control.focused,"accent"==u.Eb(n,13).color,"warn"==u.Eb(n,13).color,u.Eb(n,13)._shouldForward("untouched"),u.Eb(n,13)._shouldForward("touched"),u.Eb(n,13)._shouldForward("pristine"),u.Eb(n,13)._shouldForward("dirty"),u.Eb(n,13)._shouldForward("valid"),u.Eb(n,13)._shouldForward("invalid"),u.Eb(n,13)._shouldForward("pending"),!u.Eb(n,13)._animationsEnabled]),l(n,23,1,[u.Eb(n,24).required?"":null,u.Eb(n,28).ngClassUntouched,u.Eb(n,28).ngClassTouched,u.Eb(n,28).ngClassPristine,u.Eb(n,28).ngClassDirty,u.Eb(n,28).ngClassValid,u.Eb(n,28).ngClassInvalid,u.Eb(n,28).ngClassPending,u.Eb(n,29).id,u.Eb(n,29).tabIndex,u.Eb(n,29)._getAriaLabel(),u.Eb(n,29)._getAriaLabelledby(),u.Eb(n,29).required.toString(),u.Eb(n,29).disabled.toString(),u.Eb(n,29).errorState,u.Eb(n,29).panelOpen?u.Eb(n,29)._optionIds:null,u.Eb(n,29).multiple,u.Eb(n,29)._ariaDescribedby||null,u.Eb(n,29)._getAriaActiveDescendant(),u.Eb(n,29).disabled,u.Eb(n,29).errorState,u.Eb(n,29).required,u.Eb(n,29).empty]),l(n,35,0,u.Eb(n,36)._getTabIndex(),u.Eb(n,36).selected,u.Eb(n,36).multiple,u.Eb(n,36).active,u.Eb(n,36).id,u.Eb(n,36)._getAriaSelected(),u.Eb(n,36).disabled.toString(),u.Eb(n,36).disabled),l(n,41,1,["standard"==u.Eb(n,42).appearance,"fill"==u.Eb(n,42).appearance,"outline"==u.Eb(n,42).appearance,"legacy"==u.Eb(n,42).appearance,u.Eb(n,42)._control.errorState,u.Eb(n,42)._canLabelFloat,u.Eb(n,42)._shouldLabelFloat(),u.Eb(n,42)._hasFloatingLabel(),u.Eb(n,42)._hideControlPlaceholder(),u.Eb(n,42)._control.disabled,u.Eb(n,42)._control.autofilled,u.Eb(n,42)._control.focused,"accent"==u.Eb(n,42).color,"warn"==u.Eb(n,42).color,u.Eb(n,42)._shouldForward("untouched"),u.Eb(n,42)._shouldForward("touched"),u.Eb(n,42)._shouldForward("pristine"),u.Eb(n,42)._shouldForward("dirty"),u.Eb(n,42)._shouldForward("valid"),u.Eb(n,42)._shouldForward("invalid"),u.Eb(n,42)._shouldForward("pending"),!u.Eb(n,42)._animationsEnabled]),l(n,52,1,[u.Eb(n,53).required?"":null,u.Eb(n,57).ngClassUntouched,u.Eb(n,57).ngClassTouched,u.Eb(n,57).ngClassPristine,u.Eb(n,57).ngClassDirty,u.Eb(n,57).ngClassValid,u.Eb(n,57).ngClassInvalid,u.Eb(n,57).ngClassPending,u.Eb(n,58).id,u.Eb(n,58).tabIndex,u.Eb(n,58)._getAriaLabel(),u.Eb(n,58)._getAriaLabelledby(),u.Eb(n,58).required.toString(),u.Eb(n,58).disabled.toString(),u.Eb(n,58).errorState,u.Eb(n,58).panelOpen?u.Eb(n,58)._optionIds:null,u.Eb(n,58).multiple,u.Eb(n,58)._ariaDescribedby||null,u.Eb(n,58)._getAriaActiveDescendant(),u.Eb(n,58).disabled,u.Eb(n,58).errorState,u.Eb(n,58).required,u.Eb(n,58).empty]),l(n,64,0,u.Eb(n,65)._getTabIndex(),u.Eb(n,65).selected,u.Eb(n,65).multiple,u.Eb(n,65).active,u.Eb(n,65).id,u.Eb(n,65)._getAriaSelected(),u.Eb(n,65).disabled.toString(),u.Eb(n,65).disabled),l(n,70,0,u.Eb(n,78).ngClassUntouched,u.Eb(n,78).ngClassTouched,u.Eb(n,78).ngClassPristine,u.Eb(n,78).ngClassDirty,u.Eb(n,78).ngClassValid,u.Eb(n,78).ngClassInvalid,u.Eb(n,78).ngClassPending),l(n,90,0,u.Eb(n,91).disabled||null,"NoopAnimations"===u.Eb(n,91)._animationMode),l(n,94,0,u.Eb(n,95).disabled||null,"NoopAnimations"===u.Eb(n,95)._animationMode),l(n,97,0,"NoopAnimations"===u.Eb(n,98)._animationMode)}))}var U=u.ob("app-idle-reason",o,(function(l){return u.Ob(0,[(l()(),u.sb(0,0,null,null,1,"app-idle-reason",[],null,null,null,B,T)),u.rb(1,114688,null,0,o,[j.a,a.e,L,E.g,N.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),z=e("QQfA"),H=e("gavF"),W=e("POq0"),X=e("/Co4"),Y=e("cUpR"),Z=e("qJ5m"),G=e("Mz6y"),Q=e("DkaU"),ll=e("s6ns"),nl=e("821u"),el=e("OIZN"),tl=e("iInd"),ul=e("zMNK"),al=e("Gi4r"),il=e("oapL"),rl=e("ZwOa"),ol=e("02hT"),bl=e("Q+lL"),sl=e("pBi1"),dl=e("lT8R"),cl=e("BV1i"),pl=e("elxJ"),ml=e("5Bek"),hl=e("c9fC"),gl=e("FVPZ"),fl=e("qJ50"),_l=e("AaDx"),El=e("mkRZ"),Cl=e("dFDH"),vl=e("rWV4"),wl=e("zQui"),yl=e("8rEH"),kl=e("r0V8"),Dl=e("BzsH"),xl=e("cw5Z"),Sl=e("EApP"),Ml=e("1Q6g");e.d(n,"IdleReasonModuleNgFactory",(function(){return Fl}));var Fl=u.pb(b,[],(function(l){return u.Bb([u.Cb(512,u.j,u.ab,[[8,[s.a,d.a,c.a,c.b,p.a,m.b,m.a,h.c,g.a,U]],[3,u.j],u.w]),u.Cb(4608,a.n,a.m,[u.t,[2,a.E]]),u.Cb(4608,E.A,E.A,[]),u.Cb(4608,E.g,E.g,[]),u.Cb(4608,z.c,z.c,[z.i,z.e,u.j,z.h,z.f,u.q,u.y,a.d,w.b,[2,a.h]]),u.Cb(5120,z.j,z.k,[z.c]),u.Cb(5120,H.c,H.j,[z.c]),u.Cb(4608,W.c,W.c,[]),u.Cb(4608,_.b,_.b,[]),u.Cb(5120,X.a,X.b,[z.c]),u.Cb(5120,x.a,x.b,[z.c]),u.Cb(4608,Y.e,_.c,[[2,_.g],[2,_.l]]),u.Cb(4608,_.a,_.w,[[2,_.f],y.a]),u.Cb(5120,Z.b,Z.a,[[3,Z.b]]),u.Cb(5120,G.b,G.c,[z.c]),u.Cb(135680,M.h,M.h,[u.y,y.a]),u.Cb(4608,Q.e,Q.e,[u.L]),u.Cb(5120,ll.c,ll.d,[z.c]),u.Cb(135680,ll.e,ll.e,[z.c,u.q,[2,a.h],[2,ll.b],ll.c,[3,ll.e],z.e]),u.Cb(4608,nl.i,nl.i,[]),u.Cb(5120,nl.a,nl.b,[z.c]),u.Cb(5120,el.c,el.a,[[3,el.c]]),u.Cb(4608,N.a,N.a,[]),u.Cb(4608,a.e,a.e,[u.t]),u.Cb(1073742336,tl.o,tl.o,[[2,tl.t],[2,tl.k]]),u.Cb(1073742336,a.c,a.c,[]),u.Cb(1073742336,E.z,E.z,[]),u.Cb(1073742336,E.k,E.k,[]),u.Cb(1073742336,E.w,E.w,[]),u.Cb(1073742336,w.a,w.a,[]),u.Cb(1073742336,_.l,_.l,[[2,_.d],[2,Y.f]]),u.Cb(1073742336,y.b,y.b,[]),u.Cb(1073742336,_.v,_.v,[]),u.Cb(1073742336,O.c,O.c,[]),u.Cb(1073742336,ul.g,ul.g,[]),u.Cb(1073742336,S.c,S.c,[]),u.Cb(1073742336,z.g,z.g,[]),u.Cb(1073742336,H.i,H.i,[]),u.Cb(1073742336,H.f,H.f,[]),u.Cb(1073742336,al.c,al.c,[]),u.Cb(1073742336,il.c,il.c,[]),u.Cb(1073742336,W.d,W.d,[]),u.Cb(1073742336,v.e,v.e,[]),u.Cb(1073742336,rl.c,rl.c,[]),u.Cb(1073742336,I.e,I.e,[]),u.Cb(1073742336,_.m,_.m,[]),u.Cb(1073742336,_.t,_.t,[]),u.Cb(1073742336,ol.a,ol.a,[]),u.Cb(1073742336,bl.c,bl.c,[]),u.Cb(1073742336,_.q,_.q,[]),u.Cb(1073742336,X.c,X.c,[]),u.Cb(1073742336,x.d,x.d,[]),u.Cb(1073742336,sl.b,sl.b,[]),u.Cb(1073742336,sl.a,sl.a,[]),u.Cb(1073742336,dl.a,dl.a,[]),u.Cb(1073742336,cl.h,cl.h,[]),u.Cb(1073742336,_.x,_.x,[]),u.Cb(1073742336,_.n,_.n,[]),u.Cb(1073742336,pl.a,pl.a,[]),u.Cb(1073742336,ml.c,ml.c,[]),u.Cb(1073742336,hl.a,hl.a,[]),u.Cb(1073742336,gl.a,gl.a,[]),u.Cb(1073742336,fl.e,fl.e,[]),u.Cb(1073742336,Z.c,Z.c,[]),u.Cb(1073742336,M.a,M.a,[]),u.Cb(1073742336,G.e,G.e,[]),u.Cb(1073742336,Q.c,Q.c,[]),u.Cb(1073742336,_l.a,_l.a,[]),u.Cb(1073742336,El.a,El.a,[]),u.Cb(1073742336,Cl.d,Cl.d,[]),u.Cb(1073742336,vl.j,vl.j,[]),u.Cb(1073742336,ll.k,ll.k,[]),u.Cb(1073742336,wl.p,wl.p,[]),u.Cb(1073742336,yl.m,yl.m,[]),u.Cb(1073742336,nl.j,nl.j,[]),u.Cb(1073742336,kl.b,kl.b,[]),u.Cb(1073742336,kl.a,kl.a,[]),u.Cb(1073742336,q.i,q.i,[]),u.Cb(1073742336,Dl.b,Dl.b,[]),u.Cb(1073742336,el.d,el.d,[]),u.Cb(1073742336,xl.h,xl.h,[]),u.Cb(1073742336,Sl.i,Sl.i,[]),u.Cb(1073742336,Ml.a,Ml.a,[]),u.Cb(1073742336,b,b,[]),u.Cb(256,_.e,_.i,[]),u.Cb(256,xl.p,"en-US",[]),u.Cb(256,Sl.b,{default:Sl.a,config:{timeOut:2e3,positionClass:"toast-top-center",preventDuplicates:!0}},[]),u.Cb(1024,tl.i,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);