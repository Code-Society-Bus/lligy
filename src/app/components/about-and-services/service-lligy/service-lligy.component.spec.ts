import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLligyComponent } from './service-lligy.component';

describe('ServiceLligyComponent', () => {
  let component: ServiceLligyComponent;
  let fixture: ComponentFixture<ServiceLligyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceLligyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceLligyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
