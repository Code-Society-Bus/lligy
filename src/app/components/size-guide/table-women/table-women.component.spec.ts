import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWomenComponent } from './table-women.component';

describe('TableWomenComponent', () => {
  let component: TableWomenComponent;
  let fixture: ComponentFixture<TableWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
