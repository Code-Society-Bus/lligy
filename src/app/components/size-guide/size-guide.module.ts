import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMenComponent } from './table-men/table-men.component';
import { TableWomenComponent } from './table-women/table-women.component';
import { SharedModule } from 'src/app/shared/component/shared.module';



@NgModule({
  declarations: [
    TableMenComponent,
    TableWomenComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TableMenComponent,
    TableWomenComponent
  ]
})
export class SizeGuideModule { }
