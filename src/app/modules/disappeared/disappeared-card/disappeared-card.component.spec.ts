import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisappearedCardComponent } from './disappeared-card.component';

describe('DisappearedCardComponent', () => {
  let component: DisappearedCardComponent;
  let fixture: ComponentFixture<DisappearedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisappearedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisappearedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
