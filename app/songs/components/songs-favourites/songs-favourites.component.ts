import { Component } from '@angular/core';
import { Store } from '../../../store';

@Component({
  selector: 'songs-favourites',
  styles: [`div {color: white;}`],
  template: `
    <div class="songs">
      Favourites
    </div>
  `
})

export class SongsFavouriteComponent {
  constructor(
    private store: Store
  ) {}
}