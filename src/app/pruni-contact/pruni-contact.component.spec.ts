import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruniContactComponent } from './pruni-contact.component';

describe('PruniContactComponent', () => {
  let component: PruniContactComponent;
  let fixture: ComponentFixture<PruniContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruniContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruniContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
