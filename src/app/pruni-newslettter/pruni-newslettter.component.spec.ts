import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruniNewslettterComponent } from './pruni-newslettter.component';

describe('PruniNewslettterComponent', () => {
  let component: PruniNewslettterComponent;
  let fixture: ComponentFixture<PruniNewslettterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruniNewslettterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruniNewslettterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
