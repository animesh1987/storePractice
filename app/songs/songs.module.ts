import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SongsFavouriteComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';

@NgModule({
  declarations: [
    SongsFavouriteComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    SongsFavouriteComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ]
})

export class SongsModule {}