import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruniCollectionComponent } from './pruni-collection.component';

describe('PruniCollectionComponent', () => {
  let component: PruniCollectionComponent;
  let fixture: ComponentFixture<PruniCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruniCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruniCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
