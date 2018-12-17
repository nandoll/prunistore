import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruniHighlightComponent } from './pruni-highlight.component';

describe('PruniHighlightComponent', () => {
  let component: PruniHighlightComponent;
  let fixture: ComponentFixture<PruniHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruniHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruniHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
