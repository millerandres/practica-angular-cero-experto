import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponentTsComponent } from './pages/main-page.component.ts/main-page.component.ts.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponentTsComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponentTsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
