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
    this.carregarPokemonsSemStatus()
    console.log("Teste")

  }
  carregarPokemonsSemStatus(){
    this.pokemonService.listAllPokemons().pipe(take(1)).subscribe((resp)=> {
      resp=resp.results
      for(let objeto of resp){
        this.carregarPokemon(objeto.name,objeto.url)
      }
      console.log(this.listaPokemons)
    })

  }
  carregarPokemon(nome:string,url:string){
    this.pokemonService.listStatusPokemons(url).pipe(take(1)).subscribe((resp)=>{
      this.listaPokemons.push({name:nome,status:resp})
    })
  }
}
