import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import {RouterLink, RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        RouterModule
    ]
})
export class SharedModule { }
