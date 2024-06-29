import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit {

  constructor(){
    
  }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios)
    });

    // this.getUsuarios();


    //*PROMESAS - (aunq en angular no se usan tanto asi)
    // const promesa= new Promise( (resolve, reject) => {
      
    //   if(false){
    //     resolve("Hola mundo");
    //   }else{
    //     reject("Algo salio mal");
    //   }

    // });

    // promesa.then( (data) => {
    //   console.log(data);
    // })
    // .catch( (err) => {
    //   console.log('Error en mi promesa', err);
    // });

    // console.log('Fin del OnInit');
  
  }

  //*PROMESAS EN ANGULAR
  getUsuarios() {

    return new Promise( (resolve) => {

      fetch('https://reqres.in/api/users')
              .then( response => response.json())
              .then( body => resolve(body.data) );

    });

  }




}
