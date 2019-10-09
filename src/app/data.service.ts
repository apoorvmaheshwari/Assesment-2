import { Injectable } from '@angular/core';
import {Details} from './details';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  detail:Details[]=[];

  constructor() { }
  create(d: Details){
    this.detail.push(d);
}

}

