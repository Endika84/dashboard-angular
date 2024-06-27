import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',

  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {

  public labels1: string[]= [
    'Pan',
    'Refresco',
    'Tacos',
  ];
  public data1 = [350, 450, 100];

  public labels2: string[] = [
    '2Download Sales',
    '2In-Store Sales',
    '2Mail-Order Sales',
  ];
  public data2 = [150, 50, 40];

  public labels3: string[] = [
    '3Download Sales',
    '3In-Store Sales',
    '3Mail-Order Sales',
  ];
  public data3 = [150, 250, 340];

  public labels4: string[] = [
    '4Download Sales',
    '4In-Store Sales',
    '4Mail-Order Sales',
  ];
  public data4 = [10, 10, 40];



}
