import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";
import {take} from "rxjs";

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{

  constructor(
    private pokemonService:PokeApiService
  ) {
  }
  ngOnInit(){
    //this.pokemonService.apiListAllPokemons.subscribe(resp=>resp);
    this.pokemonService.listAllPokemons().pipe(take(1)).subscribe(
      (resp)=> {
        console.log("indices: "+resp)
        resp=resp.results
        /*
        for(let index of resp){
          console.log(index.url)
        }

         */




      }
    )
  }

}
