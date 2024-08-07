import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

import Swal from 'sweetalert2';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit{

  @ViewChild('googleBtn') googleBtn?: ElementRef;

  public formSubmited = false;

  public loginForm: FormGroup = this.fb.group({
    email: [ localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required]],
    remember: [false]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ){}

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit(){
    google.accounts.id.initialize({
      client_id: "186366143996-ojaiglia561u44fklh612s6a70u5fj71.apps.googleusercontent.com",
      callback: (response: any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      // document.getElementById("buttonDiv"),
      this.googleBtn?.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }

  handleCredentialResponse(response: any){
    console.log("Encoded JWT ID token: " + response.credential);
    this.usuarioService.loginGoogle(response.credential)
      .subscribe( resp => {
        //console.log({login: resp});
        this.router.navigateByUrl('/');
      });
  }

  login(){
    
    if(this.loginForm.invalid && !this.formSubmited){
      console.log('error');
      return;
    }
    
    this.usuarioService.login(this.loginForm.value)
        .subscribe({
          next: (resp) => {
            
            if(this.loginForm.get('remember')?.value){
              localStorage.setItem('email', this.loginForm.get('email')?.value);
            }else{
              localStorage.removeItem('email');
            }

            this.router.navigateByUrl('/');
          },
          error: (err) => {
            err.error.msg
            Swal.fire({
              title: 'Error!',
              text: err.error.msg,
              icon: 'error',
              confirmButtonText: 'ok'
            });
          }
        });


    this.router.navigateByUrl('/');
  }

}
