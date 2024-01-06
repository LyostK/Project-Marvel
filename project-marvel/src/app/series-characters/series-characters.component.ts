// series-characters.component.ts

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-series-characters',
  templateUrl: './series-characters.component.html',
  styleUrls: ['./series-characters.component.css'],
})
export class SeriesCharactersComponent {
  characters: any[];

  constructor(public dialogRef: MatDialogRef<SeriesCharactersComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.characters = data.characters;
  }
}
