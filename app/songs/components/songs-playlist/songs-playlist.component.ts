import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '../../../store';

import { SongsService } from '../../services/songs.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'songs-playlist',
  template: `
    <div class="songs">
      <song-list
        [list]="playlist$ | async">
        Playlist
      </song-list>
    </div>
  `
})

export class SongsPlaylistComponent implements OnInit, OnDestroy {
  playlist$: Observable<any[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private songsService: SongsService
  ) {}

  ngOnInit() {
    this.playlist$ = this.store.select('playlist');
    this.subscription = this.songsService.getPlaylist$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}