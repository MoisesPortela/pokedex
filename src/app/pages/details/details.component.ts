import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokeApiService} from "../../service/poke-api.service";
import {forkJoin, take} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  public pokemon:any
  constructor(
    private activatedRouter: ActivatedRoute,
    private pokeService: PokeApiService
  ) {
  }
  ngOnInit() {
    this.getPokemons
  }

  get getPokemons(){
    const id=this.activatedRouter.snapshot.params['id']
    const pokemon = this.pokeService.listPokemonById(id)
    const name = this.pokeService.getPokemonName(id)

    return forkJoin([pokemon,name]).subscribe((resp)=>{
      this.pokemon=resp;
      console.log(this.pokemon)
    })
  }

}
