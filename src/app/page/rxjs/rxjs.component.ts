import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, delay, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor(){
    
    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe( 
    //   valor => console.log('Subs:', valor),
    //   error => console.error('Error', error),
    //   () => console.info('Obs terminado')
    // );

    this.intervalSubs=  this.retornaIntervalo()
      .subscribe(
        (valor) => console.log(valor)
      );

  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  //interval observable
  retornaIntervalo(): Observable<number>{
    return interval(500)
            .pipe(
              take(10),
              map( valor => valor + 1),
              filter(value => value % 2 === 0 )
            );
  }


  //funcion observable rudimentaria
  retornaObservable(): Observable<number> {
    let i = -1;
  
    return new Observable<number>( observer => {
      
      const interval = setInterval( () => {

        i++;
        observer.next(i);

        if(i === 4){
          clearInterval(interval);
          observer.complete();
        }

        if(i === 2){
          observer.error('i llego al valor de 2');
        }

      }, 1000);

    });

  }


}
