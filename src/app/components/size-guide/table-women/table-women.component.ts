import { Component } from '@angular/core';
import { TableWomenService } from './service/table-women.service';

@Component({
  selector: 'app-table-women',
  templateUrl: './table-women.component.html',
  styleUrls: ['./table-women.component.css']
})
export class TableWomenComponent {
  constructor(private tableWomenService: TableWomenService){}

  get data(){
    return this.tableWomenService.data
  }
}
