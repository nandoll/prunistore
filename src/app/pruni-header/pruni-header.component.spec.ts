import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruniHeaderComponent } from './pruni-header.component';

describe('PruniHeaderComponent', () => {
  let component: PruniHeaderComponent;
  let fixture: ComponentFixture<PruniHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruniHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
