import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  artists: any;
  slidesOps = {};
  constructor(private router: Router, private musicService : MusicService) {}
  open() {
    //console.log('Estoy intentando abrir la intro');
    this.router.navigateByUrl('/intro');
  }
  ngOnInit() {
    this.artists = this.musicService.getArtistJson
    console.log(this.artists.artists)
  }
}
