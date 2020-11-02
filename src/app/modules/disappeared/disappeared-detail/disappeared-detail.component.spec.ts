import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisappearedDetailComponent } from './disappeared-detail.component';

describe('DisappearedDetailComponent', () => {
  let component: DisappearedDetailComponent;
  let fixture: ComponentFixture<DisappearedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisappearedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisappearedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
