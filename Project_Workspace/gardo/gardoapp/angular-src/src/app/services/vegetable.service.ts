import { Injectable } from '@angular/core';
import { Vegetable } from "../vegetable";
import { VEGS } from "../mock-vegs";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class VegetableService {

  constructor() { }

  getVegs(): Observable<Vegetable[]> {
    return of(VEGS);
  }
}
