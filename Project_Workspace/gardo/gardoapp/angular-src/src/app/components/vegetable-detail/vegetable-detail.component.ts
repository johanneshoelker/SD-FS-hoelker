import { Component, OnInit, Input } from '@angular/core';
import { Vegetable } from "../../vegetable";
import { Router } from "@angular/router";
import { VegetableService } from "../../services/vegetable.service";

@Component({
  selector: 'app-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrls: ['./vegetable-detail.component.css']
})
export class VegetableDetailComponent implements OnInit {
  plantamount: String;
  plantdate: String;
  plantlocation: String;

  @Input() vegetable: Vegetable;

  constructor(
    private vegetableService: VegetableService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  //click event for the button Let's plan(t) this one. It stores a new user specific object to the user-data and redirects to the garden
  onPlantingSubmit(){


    //a user specific Vegetable is created here including the vegetable object and the user specific data
    const userSpecVeg = {
      vegetable: this.vegetable,
      plantamount: this.plantamount,
      plantlocation: this.plantlocation,
      plantdate:this.plantdate
    }
    //console.log(userSpecVeg);

    //Storing the user spec vegetable to the backend server
    // this.vegetableService.addVeg(userSpecVeg).subscribe(data =>{
    //   if(data.success){
    //     this.flashMessage.show('The vegetable was added!', {cssClass: 'alert-success', timeout: 3000});
    //     this.router.navigate(['/vegetables']);
    //   } else{
    //     this.flashMessage.show('Something went wrong...', {cssClass: 'alert-success', timeout: 3000});
    //     this.router.navigate(['/vegetables']);
    //   }
    // });
    this.router.navigate(['/garden']);
  }

}
