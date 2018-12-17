import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruniSliderComponent } from './pruni-slider.component';

describe('PruniSliderComponent', () => {
  let component: PruniSliderComponent;
  let fixture: ComponentFixture<PruniSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruniSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruniSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
