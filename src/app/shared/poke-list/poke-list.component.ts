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
    this.loadAllPokemons()
  }
  loadAllPokemons(){
    this.pokemonService.listAllPokemons().pipe(take(1)).subscribe((simpleList)=> {
      simpleList=simpleList.results
      for(let pokemon of simpleList){
        this.loadPokemonById(pokemon.name,pokemon.url)
      }
    })
  }
  loadPokemonById(name:string,url:string){
    const fragmentoUrl=url.split('/')
    const id=parseInt(fragmentoUrl[6])
    this.pokemonService.listPokemonById(id).pipe(take(1)).subscribe((info)=>{
      this.setlistaPokemons.push({name:name,status:info})
      this.listaPokemons=this.setlistaPokemons;
    });
  }
  searchName($event:any) {
    const pokemonNameFilter = this.setlistaPokemons.filter((resp: any) => {
      return !resp.name.indexOf($event.toLowerCase());
    });
    this.listaPokemons = pokemonNameFilter;
  }
}
