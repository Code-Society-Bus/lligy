import { Injectable } from '@angular/core';
import { sizes } from 'src/app/shared/data/men/size.data';

@Injectable({
  providedIn: 'root'
})
export class TableMenService {

  private _data = sizes
  constructor() { }

  get data(){
    return this._data
  }

}
