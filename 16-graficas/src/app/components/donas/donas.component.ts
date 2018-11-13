import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styles: []
})
export class DonasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public random() {
    this.doughnutChartData = [
      Math.round(Math.random() *100),
      Math.round(Math.random() *100),
      Math.round(Math.random() *100)
    ];
  }

}
