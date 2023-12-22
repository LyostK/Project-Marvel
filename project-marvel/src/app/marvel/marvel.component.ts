// Dans marvel.component.ts
import { Component, OnInit } from '@angular/core';
import { MarvelService, MarvelCharacter } from '../marvel.service';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDescriptionDialogComponent } from '../character-description-dialog/character-description-dialog.component';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  marvelCharacters: MarvelCharacter[] = [];

  constructor(private marvelService: MarvelService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMarvelCharacters();
  }

  getMarvelCharacters(): void {
    this.marvelService.getMarvelCharacters().subscribe(characters => {
      this.marvelCharacters = characters;
    });
  }

  getCharactersDescription(characterId: number): void {
    this.marvelService.getCharacterDescription(characterId).subscribe(description => {
      console.log('Character Description:', description);
    });
  }

  openCharacterDescriptionDialog(characterId: number): void {
    this.marvelService.getCharacterDescription(characterId).subscribe(description => {
      const dialogRef = this.dialog.open(CharacterDescriptionDialogComponent, {
        width: '600px',
        data: { description: description || 'No description available.' },
      });
  
      dialogRef.afterClosed().subscribe(() => {
        console.log('Dialog closed');
      });
    });
  }
}
