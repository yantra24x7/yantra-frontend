import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    import { SidebarComponent } from './Nav/sidebar/sidebar.component';
    // import { MatToolbarModule } from '@angular/material/toolbar';[m
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { RegisterModule } from './Components/register/register.module';
    import { SharedModule } from './Components/shared/shared.module';
    import { NavbarService } from './Nav/navbar.service';
    // import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';[m
    import { CoreModule } from '../app/Service/core/core.module';
    import { HighchartsChartModule } from 'highcharts-angular';
 
    import { ChartModule } from 'angular-highcharts';
    // import * as HighchartsMore from 'highcharts/highcharts-more.src'[m
    
    @NgModule({
     declarations: [
      AppComponent,
        SidebarComponent
  ],
     imports: [
       BrowserModule,
     AppRoutingModule,
     // HttpClientModule,[m
    ChartModule,
        BrowserAnimationsModule,
        RegisterModule, SharedModule,
      // MatToolbarModule,[m
       CoreModule,
       HighchartsChartModule,
       // HighchartsMore,[m
    
 ],
     providers: [NavbarService],
     bootstrap: [AppComponent]
    })
    export class AppModule { }