import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationCardComponent } from './aplication-card.component';

describe('AplicationCardComponent', () => {
  let component: AplicationCardComponent;
  let fixture: ComponentFixture<AplicationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplicationCardComponent]
    });
    fixture = TestBed.createComponent(AplicationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
