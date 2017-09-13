import {Injectable} from '@angular/core'
import {House} from './house.model';
import {Observable} from 'rxjs/Rx';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class HouseService {
  constructor(private http : Http){}

  getHouses(): Observable<House[]>{
    const url = 'https://www.anapioficeandfire.com/api/houses?pageSize=100';
    return this.http.get(url).map(response =>response.json()as House[])
    // return Observable.of([new House('Stark'), new House('Greyjoy'), new House('Bolton')]);
  }
}
