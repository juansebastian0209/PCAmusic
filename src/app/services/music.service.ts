//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dataArtists from './artists.json';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  urlService = 'https://music.fly.dev';
  //httpHeader = { headers: new HttpHeaders('Content-Type : aplication/json') };
  constructor() {} //private http: HttpClient

  getArtistJson() {
    return dataArtists;
  }
}
