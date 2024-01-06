// serie-dialog.component.ts

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-series-dialog',
  templateUrl: './serie-dialog.component.html',
  styleUrls: ['./serie-dialog.component.css'],
})
export class SeriesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SeriesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
