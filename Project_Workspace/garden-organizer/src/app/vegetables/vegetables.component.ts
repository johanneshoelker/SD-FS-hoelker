import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../vegetable';
@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  vegetable: Vegetable = {
    id: 1,
    name: 'Potatoe',
    plant_time: 'march',
    harvest_time: 'october',
    pouring_freq: 1,
    suitable_mixed_culture: 'dontknowyet',

  }

  constructor() { }

  ngOnInit(): void {
  }

}
