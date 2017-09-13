import {Injectable} from '@angular/core'
import {Character} from './character.model';
import {Observable} from 'rxjs/Rx';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class CharacterService {
  constructor(private http : Http){}

  getCharacters(): Observable<Character[]>{
    const url = 'https://www.anapioficeandfire.com/api/characters?pageSize=100';
    return this.http.get(url).map(response =>response.json()as Character[])
  }
}
