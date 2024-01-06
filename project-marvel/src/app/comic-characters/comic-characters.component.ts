import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comic-characters',
  templateUrl: './comic-characters.component.html',
  styleUrls: ['./comic-characters.component.css']
})
export class ComicCharactersComponent {
  constructor(public dialogRef: MatDialogRef<ComicCharactersComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
}
