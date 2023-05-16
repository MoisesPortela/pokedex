import {Component, OnInit} from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";
import {take} from "rxjs";

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit{

  private setlistaPokemons:{name:string,status:any}[]=[];
  listaPokemons:{name:string,status:any}[]=[];
  namePokemonFilter:string='';

  constructor(
    private pokemonService:PokeApiService
  ) {
  }
  ngOnInit(){
    this.loadPokemonUrl()

  }
  loadPokemonUrl(){
    this.pokemonService.listAllPokemons().pipe(take(1)).subscribe((simpleList)=> {
      simpleList=simpleList.results
      for(let pokemon of simpleList){
        this.loadPokemonInfo(pokemon.name,pokemon.url)
      }
    })

  }
  loadPokemonInfo(name:string,url:string){
    this.pokemonService.listStatusPokemons(url).pipe(take(1)).subscribe((info)=>{
      this.setlistaPokemons.push({name:name,status:info})
      this.listaPokemons=this.setlistaPokemons;
    });
  }
  //Arrumar essa função
  searchName($event:any){
    if($event.length>this.namePokemonFilter.length){
      this.namePokemonFilter=$event;
    }else{
      return;
    }
    if($event.length>=this.namePokemonFilter.length) {
      const pokemonNameFilter = this.listaPokemons.filter((resp: any) => {
        return !resp.name.indexOf($event.toLowerCase());
      });
      this.listaPokemons = pokemonNameFilter;
    }else {
      this.loadPokemonUrl()
    }

  }
}
