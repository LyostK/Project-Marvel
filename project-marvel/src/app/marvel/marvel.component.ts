// marvel.component.ts

import { Component, OnInit } from '@angular/core';
import { MarvelService, MarvelCharacter } from '../marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
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
