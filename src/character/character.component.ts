import { Component, Input } from '@angular/core';
import { Character } from './character.model';

@Component({
  selector: 'character',
  template: `{{character.name}}`,
})
export class CharacterComponent {
  @Input() character: Character;
}
