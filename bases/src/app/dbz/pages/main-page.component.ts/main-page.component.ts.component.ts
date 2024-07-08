import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

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
}
