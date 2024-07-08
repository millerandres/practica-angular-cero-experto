import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponentTsComponent } from './pages/main-page.component.ts/main-page.component.ts.component';



@NgModule({
  declarations: [
    MainPageComponentTsComponent
  ],
  exports: [
    MainPageComponentTsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
