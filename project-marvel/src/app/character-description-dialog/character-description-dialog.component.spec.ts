import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDescriptionDialogComponent } from './character-description-dialog.component';

describe('CharacterDescriptionDialogComponent', () => {
  let component: CharacterDescriptionDialogComponent;
  let fixture: ComponentFixture<CharacterDescriptionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDescriptionDialogComponent]
    });
    fixture = TestBed.createComponent(CharacterDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
