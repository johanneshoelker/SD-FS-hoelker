//the requests and posts to the backend server are made here
import { Injectable } from '@angular/core';
import { Vegetable } from "../vegetable";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Http, Headers} from "@angular/http";

@Injectable()
export class VegetableService {

  constructor(private http:Http) { }

  getVegs() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/vegs/seevegs', {headers: headers})
      .map(res=> res.json());
  }

  addVeg(vegetable) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/vegs/addveg', vegetable, {headers: headers})
      .map(res=> res.json());
  }



}
