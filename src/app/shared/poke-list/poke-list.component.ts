import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";
import {take} from "rxjs";

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{
  listaPokemons:{name:string,status:any}[]=[];

  constructor(
    private pokemonService:PokeApiService
  ) {
  }
  ngOnInit(){
    this.LoadPokemonUrl()

  }
  LoadPokemonUrl(){
    this.pokemonService.listAllPokemons().pipe(take(1)).subscribe((simpleList)=> {
      simpleList=simpleList.results
      for(let pokemon of simpleList){
        this.loadPokemonInfo(pokemon.name,pokemon.url)
      }
      console.log(this.listaPokemons)
    })

  }
  loadPokemonInfo(name:string,url:string){
    this.pokemonService.listStatusPokemons(url).pipe(take(1)).subscribe((info)=>{
      this.listaPokemons.push({name:name,status:info})
    })
  }
}
