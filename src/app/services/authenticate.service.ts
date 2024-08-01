import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor() {}
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
}
