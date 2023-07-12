import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBaseComponent } from './dynamic-base.component';

describe('DynamicBaseComponent', () => {
  let component: DynamicBaseComponent;
  let fixture: ComponentFixture<DynamicBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
