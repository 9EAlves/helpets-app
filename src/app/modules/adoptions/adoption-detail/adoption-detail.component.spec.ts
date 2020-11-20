import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionDetailComponent } from './adoption-detail.component';

describe('AdoptionDetailComponent', () => {
  let component: AdoptionDetailComponent;
  let fixture: ComponentFixture<AdoptionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
