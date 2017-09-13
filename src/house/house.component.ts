import { Component, Input } from '@angular/core';
import {  House} from './house.model';

@Component({
  selector: 'house',
  template: `{{house.name}} : {{house.coatOfArms}}`,
})
export class HouseComponent {
    @Input() house : House;
}
