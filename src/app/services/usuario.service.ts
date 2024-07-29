import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

import { environment } from '../../environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';

declare const google: any;

const baseUrl: string= environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( 
    private http: HttpClient,
    private router: Router,
  ) { }


  logout(){
    localStorage.removeItem('token');
    
    google.accounts.id.revoke('endika.llonin.abasolo@gmail.com', () => {
      
      this.router.navigateByUrl('/login');

    });
  }


  crearUsuario(formData: RegisterForm): Observable<Object>{
    
    const {nombre, email, password} = formData;

    const url = `${baseUrl}/usuarios`;

    return this.http.post(url, {nombre, email, password})
      .pipe(
        tap( (resp: any) => {
          localStorage.setItem('token', resp.token);
        } )
      );

  }
  
  login(formData: LoginForm): Observable<Object>{

    const {email, password, remember} = formData;

    const url = `${baseUrl}/login`;

    return this.http.post(url, {email, password, remember})
      .pipe(
        tap( (resp: any) => {
          localStorage.setItem('token', resp.token);
        } )
      );

  }


  loginGoogle(token: string){

    const url = `${baseUrl}/login/google`;

    return this.http.post(url, {token})
      .pipe(
        tap( (resp: any) => {
          console.log(resp);
          localStorage.setItem('token', resp.token);
        } )
      )
  }

  tokenValidation(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    const url = `${baseUrl}/login/renew`;

    return this.http.get(url, {
      headers: {
        "x-token": token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token);
      }),
      map( (resp: any) => {
        return true;
      }),
      catchError(error => of(false))
    );
  }


}
