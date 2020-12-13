import { Component, OnInit } from '@angular/core';
import { VegetableService } from "../../services/vegetable.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetable-adding',
  templateUrl: './vegetable-adding.component.html',
  styleUrls: ['./vegetable-adding.component.css']
})
export class VegetableAddingComponent implements OnInit {
  name: String;
  planttime: String;
  harvtime: String;
  freq: String;
  neighb: String;
  ferts: String;
  sun: String;
  exps: String;
  
  constructor(
    private flashMessage: FlashMessagesService,
    private vegetableService: VegetableService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddingSubmit(){
    const vegetable = {
      name: this.name,
      planttime:this.planttime,
      harvtime: this.harvtime,
      freq: this.freq,
      neighb: this.neighb,
      ferts: this.ferts,
      sun: this.sun,
      exps: this.exps
    };

    //Adding a vegetable
    this.vegetableService.addVeg(vegetable).subscribe(data =>{
      if(data.success){
        this.flashMessage.show('The vegetable was added!', {cssClass: 'alert-success', timeout: 3000});
        window.location.reload(false);
      } else{
        this.flashMessage.show('Please fill in all fields.', {cssClass: 'alert-danger', timeout: 3000});
      }
    });


  }

}
