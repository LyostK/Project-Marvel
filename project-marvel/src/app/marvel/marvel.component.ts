// Dans marvel.component.ts
import { Component, OnInit } from '@angular/core';
import { MarvelService, MarvelCharacter } from '../marvel.service';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDesciprtionDialogComponent } from '../character-desciprtion-dialog/character-desciprtion-dialog.component';
import { ComicDialogComponent } from '../comic-dialog/comic-dialog.component';
import { ComicsComponent } from '../comics/comics.component';
import { SeriesDialogComponent } from '../serie-dialog/serie-dialog.component';
import { SeriesComponent } from '../series/series.component';

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

  getCharacterDescription(characterId: number): void {
    this.marvelService.getCharacterDescription(characterId).subscribe(description => {
      console.log('Character Description:', description);
    });
  }

  openCharacterDescriptionDialog(characterId: number): void {
    this.marvelService.getCharacterDescription(characterId).subscribe(description => {
      const dialogRef = this.dialog.open(CharacterDesciprtionDialogComponent,{
        width: '600px',
        data: { description: description || 'No description available.' },
      });

      dialogRef.afterClosed().subscribe(() => {
        console.log('Dialog closed');
      });
    });
  }

  fetchComics(characterId: number): void {
    this.marvelService.getComicsByCharacter(characterId).subscribe((comics: any) => {
      console.log('Comics:', comics);
      // Vous pouvez stocker les comics dans une variable du composant et les afficher dans le modèle
      this.openComicDialog(comics);
    });
  }

  openComicDialog(comics: ComicsComponent[]): void {
    const dialogRef = this.dialog.open(ComicDialogComponent, {
      width: '600px',
      data: { comics }
    });
  }

  fetchSeries(characterId: number): void {
    this.marvelService.getSeriesByCharacter(characterId).subscribe((series: any) => {
      console.log('Series:', series);
      this.openSeriesDialog(series);
    });
  }

  openSeriesDialog(series: SeriesComponent[]): void {
    const dialogRef = this.dialog.open(SeriesDialogComponent, {
      width: '600px',
      data: { series }
    });
  }
}
