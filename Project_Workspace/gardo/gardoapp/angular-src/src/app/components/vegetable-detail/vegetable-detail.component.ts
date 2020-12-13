import { Component, OnInit, Input } from '@angular/core';
import { Vegetable } from "../../vegetable";
import { User } from "../../user";

import { Router } from "@angular/router";
import { VegetableService } from "../../services/vegetable.service";
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrls: ['./vegetable-detail.component.css']
})
export class VegetableDetailComponent implements OnInit {
  plantamount: String;
  plantdate: String;
  plantlocation: String;

  @Input() vegetable: Vegetable; user:User;

  constructor(
    private flashMessage: FlashMessagesService,
    private authService:AuthService,
    private vegetableService: VegetableService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile=>{
      this.user = profile.user;
    },
    err =>{
        console.log(err);
        return false;
    });
  }
  //click event for the button Let's plan(t) this one. It stores a new user specific object to the user-data and redirects to the garden
  onPlantingSubmit(){
    //a user specific Vegetable is created here including the vegetable object
    const newplant = {
      name: this.vegetable.name,
      plantamount: this.plantamount,
      plantlocation: this.plantlocation,
      plantdate:this.plantdate
    };

    //here the already existing plants of the user data are stored in a variable
    const plants = this.user.plants;
    plants.push(newplant);
    const updateduser = {
      username: this.user.username,
      plants
    };
    console.log(updateduser);

    //Storing the user spec vegetable to the backend server
    this.authService.updateUser(updateduser).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('The vegetable was added to the users data!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/garden']);
      } else{
        this.flashMessage.show('Something went wrong...', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/garden']);
      }
    });
   }
}
