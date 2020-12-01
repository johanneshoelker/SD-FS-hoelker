import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../../vegetable';
import { VEGS } from '../../mock-vegs';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  vegetables = VEGS;
  selectedVeg: Vegetable;

  constructor() { }

  ngOnInit() {
  }

  onSelect(vegetable: Vegetable): void{
    this.selectedVeg = vegetable;
  }
}
