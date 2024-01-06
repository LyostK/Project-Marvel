import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCharactersComponent } from './comic-characters.component';

describe('ComicCharactersComponent', () => {
  let component: ComicCharactersComponent;
  let fixture: ComponentFixture<ComicCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicCharactersComponent]
    });
    fixture = TestBed.createComponent(ComicCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
