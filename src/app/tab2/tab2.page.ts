import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartDataset, ChartType } from "chart.js";
import { BaseChartDirective } from 'ng2-charts';
import {  Subscription } from 'rxjs';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {
  @ViewChild (BaseChartDirective)chart :BaseChartDirective;
  private sub: Subscription;

  posts: any = [];
  constructor(private Product: ProductService,private http: HttpClient) {
  }

  ionViewWillEnter(){
    this.Product.getPreoductLista().subscribe(
      (res) => {
      this.posts =res;
      console.log(this.posts)

      },
       (err) => console.log(err));
    
  }
 //------------------------------------------refresh--------------------------------------> 
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1500);
  }
  
//-----------------------------------------------API chart.js----------------------------------------------->
  public ChartData: ChartDataset[] =[
    {data:[], label:'Gas Licuado De Petroleo',
    backgroundColor:'#885E83', borderRadius: 20},
    {data:[], label:'Temperatura',
    backgroundColor:'#28FFBF', borderRadius: 20},
  ];
  public labels:string[]= [];
  public options: ChartOptions = {
    scales:{
      x:{
        grid: {
          color:'#D6B0B1'
        },
        ticks:{
          color:'D6B0B1'
        }
      },
      y:{
        beginAtZero: true,
        grid: {
          color:'#D6B0B1'
        },
        ticks:{
          color:'D6B0B1'
        }

      }
    }
  };
  
  ngOnInit(){
    this.sub = this.http.get('http://localhost:1337/dataobjects?_limit=1&_sort=time:DESC')
    
    .subscribe(([data]: any)=>{
      this.ChartData[0].data = [data.lpg,data.lpg,data.lpg,data.lpg];
      this.ChartData[1].data = [data.temp,data.temp,data.temp,data.temp];
      this.labels= [data.date,data.date,data.date,data.date];
      this.chart.update();
    });
   

    console.log(this.sub)
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    
  }
 

}
