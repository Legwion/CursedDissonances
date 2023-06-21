import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistComponent } from './artist/artist.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {path: 'toolbar', component: MainNavComponent},
  {path: 'home', component: HomeComponent},
  {path: 'artist-list', component: ArtistListComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'hello', component: HelloComponent},
  // {path: '', pathMatch: 'full', redirectTo: 'hello' },
  {path: '', pathMatch: 'full', redirectTo: 'hello' },
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home' },
  //eager to generate   { path: 'path', component: NameComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
