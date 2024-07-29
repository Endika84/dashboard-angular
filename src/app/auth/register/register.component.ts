import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent {

  public formSubmited = false;

  public registerForm = this.fb.group({
    nombre: ['Endika', [Validators.required]],
    email: ['endika@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required]],
    password2: ['123456', [Validators.required]],
    terminos: [true, Validators.required],
  }, {
    validators: this.passwordsIguales('password', 'password2')
  });

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
  ){}

  crearUsuario(){
    this.formSubmited= true;
    //console.log(this.registerForm.value);

    if(this.registerForm.invalid){
      return;
    }

    //si es valido, realizar el posteo
    this.usuarioService.crearUsuario(this.registerForm.value)
      .subscribe({ 
        next: resp => {
          console.log('Usuario creado');
          console.log(resp);
        }, 
        error: err => {
          //si sucede un error
          Swal.fire({
            title: 'Error!',
            text: err.error.msg,
            icon: 'error',
            confirmButtonText: 'ok'
          })
        }
      });

  }

  campoNoValido(campo: string): boolean{

    if(this.registerForm.get(campo)?.invalid && this.formSubmited){
      return true;
    }else{
      return false;
    }
  }

  aceptaTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmited;
  }

  contrasenasNoValidas(){
    const pass1= this.registerForm.get('password')?.value;
    const pass2= this.registerForm.get('password2')?.value;

    if((pass1 !== pass2) && this.formSubmited){
      return true;
    }else{
      return false;
    }
  }

  passwordsIguales(pass1Name: string, pass2Name: string){

    return (formGroup: FormGroup) => {
      const pass1Control= formGroup.get(pass1Name);
      const pass2Control= formGroup.get(pass2Name);

      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null);
      }else{
        pass2Control?.setErrors({noEsIgual: true});
      }
    }

  }


}
