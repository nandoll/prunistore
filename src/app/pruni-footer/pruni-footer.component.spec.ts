import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruniFooterComponent } from './pruni-footer.component';

describe('PruniFooterComponent', () => {
  let component: PruniFooterComponent;
  let fixture: ComponentFixture<PruniFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruniFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruniFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
