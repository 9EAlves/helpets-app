import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisappearedComponent } from './disappeared.component';

describe('DisappearedComponent', () => {
  let component: DisappearedComponent;
  let fixture: ComponentFixture<DisappearedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisappearedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisappearedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
