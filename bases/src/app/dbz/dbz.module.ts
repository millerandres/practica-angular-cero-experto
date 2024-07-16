import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponentTsComponent } from './pages/main-page.component.ts/main-page.component.ts.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



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
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
