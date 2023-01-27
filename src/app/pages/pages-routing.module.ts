import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'music',
        loadChildren: () => import('./music/music.module').then(m => m.MusicModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
