import { Character } from './../../interfaces/character.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.ts.component.html',
  styleUrl: './main-page.component.ts.component.css'
})
export class MainPageComponentTsComponent {

  public characters: Character[] = [
    {
    name: 'goku',
    power: 10000
  },
  {
    name: 'Vegueta',
    power: 8000
  },
  {
    name: 'Broly',
    power: 10000
  }
];
//para insertar al final del arreglo: push
//para insertar al inicio del arreglo: unshift
onNewCharacter(Character: Character):void{
  this.characters.push(Character);
}

onDeleteCharacter(index:number){
  this.characters.splice(index,1);
}
  
}
