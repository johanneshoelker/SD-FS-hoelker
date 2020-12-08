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
  //click event for the button Let's plan(t) this one. It redirects to the planting route
  onPlant(): void{
    this.router.navigate(['/vegetables/planting']);
  }

  onSelect(vegetable: Vegetable): void{
    this.selectedVeg = vegetable;
  }

  getVegs(): void {
    this.vegetableService.getVegs()
        .subscribe(vegetables => this.vegetables = vegetables);
  }
}

export function selectVeg() {
  return this.selectedVeg
}
