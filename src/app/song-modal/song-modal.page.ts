import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.page.html',
  styleUrls: ['./song-modal.page.scss'],
})
export class SongModalPage implements OnInit {
  artist_name: any;
  artist_id: any;
  songs: any;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.artist_name = this.navParams.get('name');
    this.artist_id = this.navParams.get('id');
    this.songs = this.navParams.get('songs');
    console.log('name', this.songs);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async selectSong(song:any){
    await this.modalController.dismiss(song); 
  }
}
