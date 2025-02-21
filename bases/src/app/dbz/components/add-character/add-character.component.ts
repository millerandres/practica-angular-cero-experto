import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name:'',
    power: 0
  }

  emitCharacher():void{
    console.log(this.character)

    this.onNewCharacter.emit(this.character)

    this.character.name = '';
    this.character.power = 0;
  }
}
