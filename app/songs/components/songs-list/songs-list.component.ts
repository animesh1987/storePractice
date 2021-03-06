import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { Song } from '../../services/songs.service';

@Component({
  selector: 'song-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['songs-list.component.scss'],
  template: `
    <div class="songs-list">
      <h3>
        <ng-content></ng-content>
      </h3>
      <ul>
        <li *ngFor='let item of list; index as i;'>
          <p>{{ item.artist }}</p>
          <span>{{ item.track }}</span>
          <div>
            <div
              class="songs-list__favourite"
              [class.active]="item.favourite"
              (click)="toggleItem(i, 'favourite')"></div>
          </div>
          <div>
            <div
              class="songs-list__listened"
              [class.active]="item.listened"
              (click)="toggleItem(i, 'listened')"></div>
          </div>
        </li>
      </ul>
    </div>
  `
})

export class SongListComponent {
  @Input()
  list: Song[];

  @Output()
  toggle = new EventEmitter<any>();

  toggleItem(index: number, prop: string) {
    const track = this.list[index];
    this.toggle.emit({
      track: {...track, [prop]: !track[prop]}
    });
  }
}