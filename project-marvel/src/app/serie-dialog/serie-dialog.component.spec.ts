import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDialogComponent } from './serie-dialog.component';

describe('SerieDialogComponent', () => {
  let component: SerieDialogComponent;
  let fixture: ComponentFixture<SerieDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerieDialogComponent]
    });
    fixture = TestBed.createComponent(SerieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
