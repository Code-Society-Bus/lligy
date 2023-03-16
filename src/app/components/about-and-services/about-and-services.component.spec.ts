import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAndServicesComponent } from './about-and-services.component';

describe('AboutAndServicesComponent', () => {
  let component: AboutAndServicesComponent;
  let fixture: ComponentFixture<AboutAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAndServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
