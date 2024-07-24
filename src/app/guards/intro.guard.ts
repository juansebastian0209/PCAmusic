import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class introGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate() {
    const intro = await this.storage.get('isIntroShowed');
    if (intro) {
      return true;
    } else {
      this.router.navigateByUrl('/intro');
      return false;
    }
  }
}
