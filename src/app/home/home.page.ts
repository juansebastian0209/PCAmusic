import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router:Router) {}
open() {
    //console.log('Estoy intentando abrir la intro');
    this.router.navigateByUrl('/intro');
}
}
