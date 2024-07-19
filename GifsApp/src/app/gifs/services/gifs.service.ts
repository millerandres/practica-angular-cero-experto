import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = []

  constructor() { }

  get tagHistory(){
    return [...this._tagsHistory]
  }

  searchTag( tag:string ):void{

    if(tag.length===0) return;
    this.organizeHistory(tag)
    this._tagsHistory.unshift(tag)
    console.log(this._tagsHistory)
  }

  organizeHistory(tag:string){
    tag = tag.toLowerCase()
  
    //incluye un nuevo registro solo si el registro es diferente de los que hay actualmente
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldtag) => oldtag !== tag )
    
    }

    //Limitando el arreglo a 10 registros
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }
}
