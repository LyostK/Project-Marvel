// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MarvelComponent } from './marvel/marvel.component'; // Ajouter cette ligne

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MarvelComponent // Ajouter cette ligne
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
