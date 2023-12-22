// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router'; // Importer RouterModule et Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelComponent } from './marvel/marvel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterDescriptionDialogComponent } from './character-description-dialog/character-description-dialog.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { AboutComponent } from './about/about.component';
import { ComicDialogComponent } from './comic-dialog/comic-dialog.component';
import { SerieDialogComponent } from './serie-dialog/serie-dialog.component';

const routes: Routes = [
  { path: 'marvel', component: MarvelComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/marvel', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    CharacterDescriptionDialogComponent,
    ComicsComponent,
    SeriesComponent,
    AboutComponent,
    ComicDialogComponent,
    SerieDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), // Ajouter cette ligne pour configurer les routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
