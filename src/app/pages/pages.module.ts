import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import {PagesRoutingModule} from "./pages.routing.module";
//Pages
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
