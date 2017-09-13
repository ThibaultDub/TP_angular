import { Component, OnInit } from '@angular/core';
import { Character } from '../character/character.model';
import { CharacterService } from '../character/character.service';
@Component({
  selector: 'characters',
  template: `
  <h1>Characters</h1>
  <ul>
    <li *ngFor="let character of characters">
      <character [character]="character"></character>
    </li>
  </ul>
  `,
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters => this.characters = characters);
  }
}
