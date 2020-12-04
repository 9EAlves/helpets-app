import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisappearedComponent } from './admin-disappeared.component';

describe('AdminDisappearedComponent', () => {
  let component: AdminDisappearedComponent;
  let fixture: ComponentFixture<AdminDisappearedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDisappearedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisappearedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
