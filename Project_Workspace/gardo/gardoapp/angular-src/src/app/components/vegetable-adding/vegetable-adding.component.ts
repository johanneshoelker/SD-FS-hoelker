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
  plantdate: String;
  harvdate: String;
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
      plantdate:this.plantdate,
      harvdate: this.harvdate
    }

    //Adding a vegetable
    this.vegetableService.addVeg(vegetable).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('The vegetable was added!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/vegetables']);
      } else{
        this.flashMessage.show('Something went wrong...', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/vegetables']);
      }
    });

  }

}
