// series.component.ts

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarvelService } from '../marvel.service';
import { SeriesCharactersComponent } from '../series-characters/series-characters.component';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  series: any[] = [];

  constructor(private marvelService: MarvelService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchSeries();
  }

  fetchSeries(): void {
    this.marvelService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  fetchCharactersForSeries(serieId: number): void {
    this.marvelService.getCharactersForSeries(serieId).subscribe((characters: any[]) => {
      const dialogRef = this.dialog.open(SeriesCharactersComponent, {
        width: '600px',
        data: { characters },
      });

      dialogRef.afterClosed().subscribe(() => {
        console.log('Series characters dialog closed');
      });
    });
  }
}
