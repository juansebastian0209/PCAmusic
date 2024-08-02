import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticateService } from '../services/authenticate.service';

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
    private storage: Storage,
    private authService: AuthenticateService
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
      name: new FormControl('', Validators.compose([Validators.required])),
      last_name: new FormControl('', Validators.compose([Validators.required])),
    });
  }
  ngOnInit() {}

  goToLogin() {
    this.navCltr.navigateBack('/login');
  }

  register(registerData: any) {
    console.log(registerData);
    this.authService.registerUser(registerData).then((res) => {
      this.navCltr.navigateBack('/login');
    });
  }
}
