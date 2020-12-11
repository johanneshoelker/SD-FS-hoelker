import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Plantedveg } from "../../plantedveg";

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {
  user:Object;
  plants: Object;

  plantedvegs: Plantedveg[];
  plantedveg: any;
  selectedVeg: Plantedveg;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile=>{
      this.user = profile.user;
      this.plantedvegs=profile.user.plants;
    },
    err =>{
        console.log(err);
        return false;
    });

  }

  onSelect(plantedveg: Plantedveg): void{
    this.selectedVeg = plantedveg;
    console.log(this.plantedvegs);
    console.log(this.plantedveg);
    console.log(this.selectedVeg);
  }

}
