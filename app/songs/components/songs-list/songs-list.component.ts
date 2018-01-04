import { Component, Input } from '@angular/core';

import { Song } from '../../services/songs.service';

@Component({
  selector: 'song-list',
  styleUrls: ['songs-list.component.scss'],
  template: `
    <div class="songs-list">
      <div *ngFor='let item of list'>
        {{ item.artist }}:
        {{ item.track }}
      </div>
    </div>
  `
})

export class SongListComponent {
  @Input()
  list: Song[];
}