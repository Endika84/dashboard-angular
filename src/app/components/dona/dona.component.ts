import { AfterViewInit, Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  standalone: true,
  imports: [ BaseChartDirective],
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent implements AfterViewInit{
  

  @Input()
  public title: string = '';

  @Input('labels')
  public doughnutChartLabels: string[] = [];

  @Input()
  public data: number[] = [];

  public doughnutChartData?: ChartData<'doughnut'>;

  ngAfterViewInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: this.data,
          backgroundColor: ['#9E120E', '#FF5800', '#FFB414']
        },
      ],
    };
  }

  

}
