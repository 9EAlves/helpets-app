import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngDetailComponent } from './ong-detail.component';

describe('OngDetailComponent', () => {
  let component: OngDetailComponent;
  let fixture: ComponentFixture<OngDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
