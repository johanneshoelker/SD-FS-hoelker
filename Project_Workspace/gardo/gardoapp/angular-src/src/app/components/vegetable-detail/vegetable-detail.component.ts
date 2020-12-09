import { Component, OnInit, Input } from '@angular/core';
import { Vegetable } from "../../vegetable";
import { Router } from "@angular/router";


@Component({
  selector: 'app-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrls: ['./vegetable-detail.component.css']
})
export class VegetableDetailComponent implements OnInit {
  onPl:boolean;

  @Input() vegetable: Vegetable;

  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

  //click event for the button Let's plan(t) this one. It redirects to the garden
  onPlantingSubmit(){
    const vegetable= this.vegetable;
    console.log(vegetable);
      this.router.navigate(['/garden']);
  }

}
