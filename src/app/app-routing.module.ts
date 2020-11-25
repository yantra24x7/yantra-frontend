import { NgModule } from '@angular/core';
   import { Routes, RouterModule } from '@angular/router';
   import { AuthGuard} from '../app/Service/core/authentication/auth.guard';
    
   
    const routes: Routes = [
    { 
      path: '', loadChildren: () => import('./Components/login/login.module').then(m => m.LoginModule) 
    },
    {
       path: 'register', loadChildren: () => import('./Components/register/register.module').then(m => m.RegisterModule)
    },
    { 
      path: 'sidebar', loadChildren: () => import('./Nav/sidebar/sidebar.module').then(m => m.SidebarModule) 
    },
    { 
      path: 'alarm', loadChildren: () => import('./Components/alarm/alarm.module').then(m => m.AlarmModule) 
    },
    
    { 
      path: 'dashboard', loadChildren: () => import('./Components/dashboard/dashboard.module').then(m => m.DashboardModule), 
    },
    
    { 
      path: 'report', loadChildren: () => import('./Components/report/report.module').then(m => m.ReportModule) 
    },
  
    {
       path: 'machine_registration', loadChildren: () => import('./Components/machine-registration/machine-registration.module').then(m => m.MachineRegistrationModule) 
    },
    { path: 'user_management', loadChildren: () => import('./Components/user-management/user-management.module').then(m => m.UserManagementModule) 
    },
    { 
      path: 'operator_registration', loadChildren: () => import('./Components/operator-registration/operator-registration.module').then(m => m.OperatorRegistrationModule) 
    },
    { 
      path: 'shift', loadChildren: () => import('./Components/shift/shift.module').then(m => m.ShiftModule) 
    },
      
    {
       path: 'trendchart', loadChildren: () => import('./Components/trendchart/trendchart.module').then(m => m.TrendchartModule) 
      },
       { 
         path: 'comparechart', loadChildren: () => import('./Components/comparechart/comparechart.module').then(m => m.ComparechartModule) 
        },
       { 
         path: 'overallchart', loadChildren: () => import('./Components/overallchart/overallchart.module').then(m => m.OverallchartModule) 
        },
      {
         path: 'Tablet', loadChildren: () => import('./Components/machine-lmw/machine-lmw.module').then(m => m.MachineLmwModule) 
        },
      {
         path: 'reason_lmw', loadChildren: () => import('./Components/reason-lmw/reason-lmw.module').then(m => m.ReasonLmwModule) 
        },
      { 
        path: 'oee_dashboard', loadChildren: () => import('./Components/oee-dashboard/oee-dashboard.module').then(m => m.OeeDashboardModule) 
      },
     { 
       path: 'reflect', loadChildren: () => import('./Components/reflect/reflect.module').then(m => m.ReflectModule) 
      },
    { 
      path: 'idle_reason', loadChildren: () => import('./Components/idle-reason/idle-reason.module').then(m => m.IdleReasonModule) 
    },
     {
        path: 'production', loadChildren: () => import('./Components/production/production.module').then(m => m.ProductionModule) 
      },
      { 
        path: 'report_idle', loadChildren: () => import('./Components/report-idle/report-idle.module').then(m => m.ReportIdleModule) 
      },
    { path: 'oee', loadChildren: () => import('./Components/oee/oee.module').then(m => m.OeeModule) },
    { path: 'chart', loadChildren: () => import('./Components/chart/chart.module').then(m => m.ChartModule) },
    { path: 'trend_analysis', loadChildren: () => import('./Components/trend-analysis/trend-analysis.module').then(m => m.TrendAnalysisModule) },
    { path: 'machine_details', loadChildren: () => import('./Components/machine-details/machine-details.module').then(m => m.MachineDetailsModule) },
    { path: 'operator_view', loadChildren: () => import('./Components/operator-view/operator-view.module').then(m => m.OperatorViewModule) },
    { path: 'kpi_dashboard', loadChildren: () => import('./Components/kpi-dashboard/kpi-dashboard.module').then(m => m.KpiDashboardModule) },
    { path: 'machine_view', loadChildren: () => import('./Components/machine-view/machine-view.module').then(m => m.MachineViewModule) },
    { path: 'api_dashboard', loadChildren: () => import('./Components/api-dashboard/api-dashboard.module').then(m => m.ApiDashboardModule) },
    
    
    ]
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
    })
    export class AppRoutingModule { }