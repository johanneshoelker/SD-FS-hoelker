import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../vegetable';
import {VEGETABLES} from '../default-vegetables';
@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  vegetables=VEGETABLES;

  constructor() { }

  ngOnInit(): void {
  }

}
