import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private storage: Storage) {}
  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (
        credentials.email === 'Juan140614@gmail.com' &&
        credentials.password === 'aB3dEfGh'
      ) {
        accept('Login Correcto');
      } else {
        reject('Credenciales Incorrectas');
      }
    });
  }
  registerUser(registerData: any) {
    registerData.password = btoa(registerData.password);
    return this.storage.set('user', registerData);
  }
}
