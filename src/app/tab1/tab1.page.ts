import { Component, ElementRef, ViewChild } from '@angular/core';

import { ChartConfiguration } from 'chart.js';
import { ProductService } from '../services/product.service';
import { User } from '../model/user';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private users: User[];
  constructor(
    private Product: ProductService
  ) {
  }

  ionViewWillEnter(){
    this.Product.getProduct().subscribe(res => console.log(res), err => console.log(err))
    console.log('loading page...');
    this.Product.getProduct();
    this.Product.getProduct().subscribe(
      apiData => {
        var jsonData = JSON.parse(JSON.stringify(apiData));
        this.users =  jsonData.product;
      }

    );
    console.log(this.users);
  }
  title = 'ng2-charts-demo';
    // Doughnut
    public doughnutChartLabels: string[] = [ 'Download Sales'];
    public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
        { data: [ 350,100 ], label: 'Series A' }
      ];
  
    public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
      responsive: false
    };
    
  ngOnInit() {
  }
}


