import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  validation_messages = {
    email: [
      { type: 'required', message: 'El email es obligatorio' },
      { type: 'pattern', message: 'Email invalido' },
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'pattern', message: 'Contraseña invalida' },
    ],
    name: [
      { type: 'required', message: 'El nombre es obligatorio' },
      { type: 'pattern', message: 'Nombre invalido' },
    ],
    last_name: [
      { type: 'required', message: 'El apellido es obligatorio' },
      { type: 'pattern', message: 'Apellido invalido' },
    ],
  };
  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private navCltr: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[^@s]+@[^@s]+.[^@s]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
        ])
      ),
      name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "/^[A-ZÁÉÍÓÚÑa-záéíóúñ]+([ '-][A-ZÁÉÍÓÚÑa-záéíóúñ]+)*$/"
          ),
        ])
      ),
      last_name: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "/^[A-ZÁÉÍÓÚÑa-záéíóúñ]+([ '-][A-ZÁÉÍÓÚÑa-záéíóúñ]+)*$/"
          ),
        ])
      ),
    });
  }
  ngOnInit() {}
}