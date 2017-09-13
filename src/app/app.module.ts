
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HousesComponent } from '../houses/houses.component';
import { HouseComponent } from '../house/house.component';
import { HouseService } from '../house/house.service';

import { CharactersComponent } from '../characters/characters.component';
import { CharacterComponent } from '../character/character.component';
import { CharacterService } from '../character/character.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseComponent,
    CharacterComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HouseService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
