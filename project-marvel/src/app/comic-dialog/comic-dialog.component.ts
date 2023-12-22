// comic-dialog.component.ts

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  // Ajoutez d'autres propriétés si nécessaire
}

@Component({
  selector: 'app-comic-dialog',
  templateUrl: './comic-dialog.component.html',
  styleUrls: ['./comic-dialog.component.css']
})
export class ComicDialogComponent {
  comics: Comic[] = [];

  constructor(
    public dialogRef: MatDialogRef<ComicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { comics: Comic[] }
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
}
}
