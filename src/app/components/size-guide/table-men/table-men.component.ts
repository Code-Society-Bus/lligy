import { Component } from '@angular/core';
import { TableMenService } from './services/table-men.service';

@Component({
  selector: 'app-table-men',
  templateUrl: './table-men.component.html',
  styleUrls: ['./table-men.component.css']
})
export class TableMenComponent {
  constructor(private tableMenService: TableMenService){}

  get data(){
    return this.tableMenService.data
  }
}
