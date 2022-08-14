import { HttpClient } from '@angular/common/http';
import { Component,  OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartDataset, ChartType } from "chart.js";

import { BaseChartDirective } from 'ng2-charts';
import {  Subscription } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
 
  @ViewChild (BaseChartDirective)chart :BaseChartDirective;
  private sub: Subscription;

  constructor(private http: HttpClient) {
  }
//-----------------------------------CHART.JS--------------------------------------

public ChartData: ChartDataset[] =[
  {data:[], label:'maxim',
  backgroundColor:'#E8F9FD'},
  {data:[], label:'maxim',
  backgroundColor:'#A149FA'}
];
public labels:string[]= ['Gas Licuado De petroleo'];

public options: ChartOptions = {
};

  ngOnInit() {
  this.sub = this.http.get('http://localhost:1337/dataobjects?_limit=1&_sort=time:DESC')
    
    .subscribe(([data]: any)=>{
      this.ChartData[0].data = [data.lpg,350-data.lpg];
      this.ChartData[1].data = [data.temp,350-data.temp];
      this.chart.update();
    });


    console.log(this.sub)
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
    
  }

}
