import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruniMagazineComponent } from './pruni-magazine.component';

describe('PruniMagazineComponent', () => {
  let component: PruniMagazineComponent;
  let fixture: ComponentFixture<PruniMagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruniMagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruniMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
