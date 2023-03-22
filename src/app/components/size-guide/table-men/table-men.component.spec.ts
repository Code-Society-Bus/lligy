import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMenComponent } from './table-men.component';

describe('TableMenComponent', () => {
  let component: TableMenComponent;
  let fixture: ComponentFixture<TableMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
