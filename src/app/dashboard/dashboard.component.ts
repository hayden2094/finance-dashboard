import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [NgxChartsModule]
})
export class DashboardComponent implements OnInit {

  // Data for the line chart (Account Balance Over Time)
  lineChartData = [
    { "name": "Jan", "value": 5000 },
    { "name": "Feb", "value": 5500 },
    { "name": "Mar", "value": 5300 },
    { "name": "Apr", "value": 5800 },
    { "name": "May", "value": 6200 },
    { "name": "Jun", "value": 6500 }
  ];

  // Data for the pie chart (Spending by Category)
  pieChartData = [
    { "name": "Food", "value": 2000 },
    { "name": "Housing", "value": 1500 },
    { "name": "Entertainment", "value": 700 },
    { "name": "Transportation", "value": 400 },
    { "name": "Others", "value": 300 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
