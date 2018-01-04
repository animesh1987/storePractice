import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store';

import { SongsService, Song } from '../../services/songs.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'songs-listened',
  template: `
    <div class="songs">
      <song-list
        (toggle)="onToggle($event)"
        [list]="listened$ | async">
        Listened
      </song-list>
    </div>
  `
})

export class SongsListenedComponent implements OnInit {
  listened$: Observable<any[]>;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.listened$ = this.store.select('playlist')
      .filter(Boolean)
      .map(playlist => playlist.filter(
        (track: Song) => track.listened));;
  }

  onToggle(event: any) {
    this.songsService.toggle(event);
  }
}