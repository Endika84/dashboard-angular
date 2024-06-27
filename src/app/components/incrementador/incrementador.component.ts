import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrl: './incrementador.component.css'
})
export class IncrementadorComponent implements OnInit{
  

  @Input('valor') 
  public progreso: number = 20;

  @Input() 
  public btnClass: string = 'btn-primary';

  @Output()
  public progresEventValue: EventEmitter<number>= new EventEmitter();


  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(value: number): number | void{

    if(this.progreso >= 100 && value > 0) {
      this.progresEventValue.emit(100);
      return this.progreso = 100;
    }
    if(this.progreso <= 0 && value < 0) {
      this.progresEventValue.emit(0);
      return this.progreso = 0;
    }

    this.progreso += value;
    this.progresEventValue.emit(this.progreso);
  }

  onChange(newValue: number){
    if(newValue >= 100){
      this.progreso = 100;
    }else if(newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }


    this.progresEventValue.emit(this.progreso);
  }

}
