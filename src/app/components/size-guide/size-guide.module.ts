import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMenComponent } from './table-men/table-men.component';
import { TableWomenComponent } from './table-women/table-women.component';



@NgModule({
  declarations: [
    TableMenComponent,
    TableWomenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableMenComponent,
    TableWomenComponent
  ]
})
export class SizeGuideModule { }
