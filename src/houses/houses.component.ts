import { Component, OnInit } from '@angular/core';
import { House } from '../house/house.model';
import {HouseService} from '../house/house.service';
@Component({
  selector: 'houses',
  template: `
  <h1>Houses</h1>
  <ul>
    <li *ngFor="let house of houses">
      <house [house]="house"></house>
    </li>
  </ul>
  `,
})
export class HousesComponent implements OnInit {
  houses : House[];
  constructor(private houseService: HouseService) {
  }

  ngOnInit(): void {
    this.houseService.getHouses().subscribe(houses => this.houses = houses);
  }
}
