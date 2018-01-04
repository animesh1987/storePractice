import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';

import { SongsService, Song } from '../../services/songs.service';
import {  } from '../../services/songs.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'songs-favourites',
  template: `
    <div class="songs">
      <song-list
        [list]="favourites$ | async">
        Favourites
      </song-list>
    </div>
  `
})

export class SongsFavouriteComponent implements OnInit {
  favourites$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.favourites$ = this.store.select('playlist')
      .filter(Boolean)
      .map(playlist => playlist.filter(
        (track: Song) => track.favourite));
  }

}