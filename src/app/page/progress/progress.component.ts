import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

  public progreso1: number = 25;
  public progreso2: number = 35;

  get getPorcentaje1(): string {
    return `${this.progreso1}%`;
  }
  get getPorcentaje2(): string {
    return `${this.progreso2}%`;
  }
  

}
