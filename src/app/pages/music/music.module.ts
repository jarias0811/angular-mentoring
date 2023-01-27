import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { AlbumComponent } from './components/album/album.component';


@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule
  ]
})
export class MusicModule { }
