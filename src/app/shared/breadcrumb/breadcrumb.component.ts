import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Data, Router } from '@angular/router';
import { Observable, Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: ``
})
export class BreadcrumbComponent implements OnDestroy{

  public titulo?: string;
  public tituloSubs$?: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {

    //esta es otra forma de conseguir la data del router pero solo sirbe una vez
    //no se queda escuchando los cambios de rutas
    //console.log(route.snapshot.children[0].data);

    this.tituloSubs$= this.getArgumentosRuta()
                            .subscribe( ({title}) => {
                              this.titulo= title;
                              document.title= `AdminPro - ${title}`;
                            });
  }

  ngOnDestroy(): void {
    this.tituloSubs$?.unsubscribe();
  }

  getArgumentosRuta(): Observable<Data>{
    return this.router.events
      .pipe(
        filter( (event): event is ActivationEnd => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot.data)
      );
  }

}
