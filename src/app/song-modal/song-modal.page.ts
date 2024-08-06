import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.page.html',
  styleUrls: ['./song-modal.page.scss'],
})
export class SongModalPage implements OnInit {
  artist_name: any;
  artist_id: any;
  constructor(private navParams: NavParams) {}

  ngOnInit() {
    this.artist_name = this.navParams.get('name');
    this.artist_id = this.navParams.get('id'); 
    console.log('name', this.artist_name);
  }
}
