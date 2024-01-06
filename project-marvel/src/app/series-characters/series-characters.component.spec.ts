import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCharactersComponent } from './series-characters.component';

describe('SeriesCharactersComponent', () => {
  let component: SeriesCharactersComponent;
  let fixture: ComponentFixture<SeriesCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesCharactersComponent]
    });
    fixture = TestBed.createComponent(SeriesCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
