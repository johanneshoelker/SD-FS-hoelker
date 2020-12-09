import { Component, OnInit } from '@angular/core';
import {VegetableService} from "../../services/vegetable.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from '@angular/router';

@Component({
  selector: 'app-vegetable-adding',
  templateUrl: './vegetable-adding.component.html',
  styleUrls: ['./vegetable-adding.component.css']
})
export class VegetableAddingComponent implements OnInit {
  name: String;
  planttime: String;
  harvtime: String;
  constructor(
    private flashMessage: FlashMessagesService,
    private vegetableService: VegetableService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddingSubmit(){
    //console.log(this.name);
    const vegetable = {
      name: this.name,
      planttime:this.planttime,
      harvtime: this.harvtime
    }

    //Adding a vegetable
    this.vegetableService.addVeg(vegetable).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('The vegetable was added!', {cssClass: 'alert-success', timeout: 3000});
        window.location.reload(false);
      } else{
        this.flashMessage.show('Something went wrong...', {cssClass: 'alert-danger', timeout: 3000});
      }
    });


  }

}
