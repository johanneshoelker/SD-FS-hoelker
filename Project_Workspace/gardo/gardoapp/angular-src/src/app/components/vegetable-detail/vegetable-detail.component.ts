import { Component, OnInit, Input } from '@angular/core';
import { Vegetable } from "../../vegetable";
@Component({
  selector: 'app-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrls: ['./vegetable-detail.component.css']
})
export class VegetableDetailComponent implements OnInit {
  @Input() vegetable: Vegetable;

  constructor() { }

  ngOnInit() {
  }

}
