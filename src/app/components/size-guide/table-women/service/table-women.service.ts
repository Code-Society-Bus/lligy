import { Injectable } from '@angular/core';
import { sizes } from 'src/app/shared/data/women/size.data';

@Injectable({
  providedIn: 'root'
})
export class TableWomenService {

  private _data = sizes
  constructor() { }

  get data(){
    return this._data
  }

}
