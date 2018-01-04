import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SongsService } from './services/songs.service';

import { SongsFavouriteComponent } from './components/songs-favourites/songs-favourites.component';
import { SongsPlaylistComponent } from './components/songs-playlist/songs-playlist.component';
import { SongsListenedComponent } from './components/songs-listened/songs-listened.component';
import { SongListComponent } from './components/songs-list/songs-list.component';

@NgModule({
  declarations: [
    SongsFavouriteComponent,
    SongsListenedComponent,
    SongsPlaylistComponent,
    SongListComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    SongsService
  ],
  exports: [
    SongsFavouriteComponent,
    SongsListenedComponent,
    SongsPlaylistComponent
  ]
})

export class SongsModule {}