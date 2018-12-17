import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruniOfferComponent } from './pruni-offer.component';

describe('PruniOfferComponent', () => {
  let component: PruniOfferComponent;
  let fixture: ComponentFixture<PruniOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruniOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruniOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
