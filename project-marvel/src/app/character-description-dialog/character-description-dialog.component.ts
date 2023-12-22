// Dans character-description-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-character-description-dialog',
  template: `
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Description</h5>
            <button type="button" class="btn-close" (click)="closeDialog()" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p *ngIf="data.description; else noDescription">{{ data.description }}</p>
            <ng-template #noDescription>No description available.</ng-template>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .modal {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
      }

      .modal-dialog {
        margin: 50px auto;
        max-width: 600px;
      }

      .modal-content {
        border-radius: 0;
      }

      .modal-header {
        background-color: #f8f9fa;
        border-bottom: 1px solid #dee2e6;
        padding: 15px;
        position: relative;
      }

      .modal-title {
        margin-bottom: 0;
      }

      .btn-close {
        position: absolute;
        top: 15px;
        right: 15px;
      }

      .modal-body {
        padding: 15px;
      }
    `,
  ],
})
export class CharacterDescriptionDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { description: string },
    public dialogRef: MatDialogRef<CharacterDescriptionDialogComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
