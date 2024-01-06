import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDesciprtionDialogComponent } from './character-desciprtion-dialog.component';

describe('CharacterDesciprtionDialogComponent', () => {
  let component: CharacterDesciprtionDialogComponent;
  let fixture: ComponentFixture<CharacterDesciprtionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDesciprtionDialogComponent]
    });
    fixture = TestBed.createComponent(CharacterDesciprtionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
