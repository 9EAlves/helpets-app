import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDisappearedComponent } from './new-disappeared.component';

describe('NewDisappearedComponent', () => {
  let component: NewDisappearedComponent;
  let fixture: ComponentFixture<NewDisappearedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDisappearedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDisappearedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
