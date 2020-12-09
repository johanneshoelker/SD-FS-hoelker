import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../../vegetable';
import {Router} from '@angular/router';
import { VegetableService } from '../../services/vegetable.service'

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  vegetables: Vegetable[];
  selectedVeg: Vegetable;
  vegetable: any;
  constructor(
    private vegetableService: VegetableService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getVegs();
  }
  onSelect(vegetable: Vegetable): void{
    this.selectedVeg = vegetable;
  }

  getVegs(): void {
    this.vegetableService.getVegs()
        .subscribe(vegetables => this.vegetables = vegetables);
  }
}
