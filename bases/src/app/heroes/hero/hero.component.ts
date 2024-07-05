import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iron-Man'
  public  age: Number = 30;

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return `${ this.name } - ${this.age}';`
  }
}
