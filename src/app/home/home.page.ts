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
  song = {
    name: '',
    playing: false,
    preview_url: '',
  };
  currentSong: any = {};
  newTime: any;
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
    const songs = await this.musicService.getArtistTracks(artist.id);
    const modal = await this.modalController.create({
      component: SongModalPage,
      componentProps: {
        name: artist.name,
        id: artist.id,
        songs: songs,
      },
    });
    modal.onDidDismiss().then((dataRetourned) => {
      this.song = dataRetourned.data;
    });
    modal.present();
  }
  play() {
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    this.currentSong.addEventListener('timeupdate', () => {
      this.newTime =
        (1 / this.currentSong.duration) * this.currentSong.currentTime;
    });
    this.song.playing = true;
  }
  pause() {
    this.currentSong.pause();
    this.song.playing = false;
  }

  parseTime(time = '0.00') {
    if (time) {
      const partTime = parseInt(time.toString().split('.')[0], 10);
      let minutes = Math.floor(partTime / 60).toString();
      if (minutes.length == 1) {
        minutes = '0' + minutes;
      }
      let seconds = (partTime % 60).toString();
      if (seconds.length == 1) {
        seconds = '0' + seconds;
      }
      return minutes + ':' + seconds;
    }
    return null;
  }
}
