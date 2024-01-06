// comics.component.ts

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarvelService } from '../marvel.service';
import { ComicCharactersComponent } from '../comic-characters/comic-characters.component';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {
  comics: any[] = [];

  constructor(private marvelService: MarvelService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchComics();
  }

  fetchComics(): void {
    this.marvelService.getComics().subscribe((comics) => {
      this.comics = comics;
    });
  }

  fetchCharactersForComic(comicId: number): void {
    this.marvelService.getCharactersForComic(comicId).subscribe((characters) => {
      const dialogRef = this.dialog.open(ComicCharactersComponent, {
        width: '600px',
        data: { characters },
      });

      dialogRef.afterClosed().subscribe(() => {
        console.log('Comic characters dialog closed');
      });
    });
  }
}
