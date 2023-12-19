// home.component.ts

import { Component, OnInit } from '@angular/core';
import { MarvelService, MarvelCharacter } from '../marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  marvelCharacters: MarvelCharacter[] = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.getMarvelCharacters();
  }

  getMarvelCharacters(): void {
    this.marvelService.getMarvelCharacters().subscribe(characters => {
      this.marvelCharacters = characters;
    });
  }
}
