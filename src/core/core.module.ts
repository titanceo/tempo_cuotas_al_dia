import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    HeaderComponent
  ],
  providers:[
    HeaderComponent
  ]
})
export class CoreModule { }
