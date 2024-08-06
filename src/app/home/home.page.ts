import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongModalPage } from '../song-modal/song-modal.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  artistsJson: any;
  artists: any;
  slidesOps = {};
  constructor(
    private router: Router,
    private musicService: MusicService,
    private modalController: ModalController
  ) {}
  open() {
    //console.log('Estoy intentando abrir la intro');
    this.router.navigateByUrl('/intro');
  }
  ngOnInit() {
    this.artistsJson = this.musicService.getArtistJson().artists;
    console.log(this.artistsJson.artists);
    this.musicService.getArtist().subscribe((data: any) => {
      this.artists = data;
      console.log(this.artists);
    });
    // this.musicService.getArtist().then(data =>{
    //   console.log(data)
    // })
  }
  async showSongs(artist: any) {
    console.log(artist);
    const modal = await this.modalController.create({
      component: SongModalPage,
      componentProps: {
        name: artist.name,
        id: artist.id,
      },
    });
    modal.present();
  }
}
