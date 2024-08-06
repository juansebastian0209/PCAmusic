import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dataArtists from './artists.json';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  urlService = 'https://music.fly.dev';
  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json' }),
  };
  constructor(private http: HttpClient) {}

  getArtistJson() {
    return dataArtists;
  }
  getArtist() {
    return this.http.get(`${this.urlService}/artists`, this.httpHeaders);
    // return fetch(`${this.urlService}/artists`).then(
    //   response => response.json( )
    // );
  }
  getArtistTracks(artist_id: number) {
    return this.http.get(
      `${this.urlService}/tracks/artist/${artist_id}`,
      this.httpHeaders
    );
  }
}
