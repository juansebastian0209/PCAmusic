import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: 'required', message: 'El email es obligatorio' },
      { type: 'pattern', message: 'Email invalido' },
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatoria' },
      { type: 'pattern', message: 'Contraseña invalida' },
    ],
  };

  errorMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          /*Validators.email*/ Validators.pattern('^[^@s]+@[^@s]+.[^@s]+$'),
        ])
      ),

      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('((?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
        ])
      ),
    });
  }
  ngOnInit() {}

  loginUser(dataLogin: any) {
    console.log(dataLogin);
    this.authService
      .loginUser(dataLogin)
      .then((res) => {
        this.errorMessage = '';
        this.storage.set('isUserLoggedIn', true);
        this.navCtrl.navigateForward('/menu/home');
      })
      .catch((err) => {
        this.errorMessage = err;
        this.presentAlert(this.errorMessage);
      });
  }
  async presentAlert(mss: string) {
    const alert = await this.alertController.create({
      header: 'Ops hubo un error',
      message: mss,
      buttons: ['OK', 'CANCELAR'],
    });

    await alert.present();
  }
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
}
