import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokeApiService} from "../../service/poke-api.service";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  public pokemon:any
  public isLoading:boolean=false;
  public errorIsTrue:boolean=false;
  constructor(
    private activatedRouter: ActivatedRoute,
    private pokeService: PokeApiService
  ) {
  }
  ngOnInit() {
    this.getPokemons
  }

  public getPokemons(){
    const id=this.activatedRouter.snapshot.params['id']
    const pokemon = this.pokeService.listPokemonById(id)
    const name = this.pokeService.getPokemonName(id)

    return forkJoin([pokemon,name]).subscribe((resp)=>{
      this.pokemon=resp;
      this.isLoading=true;
    },
      (error)=>{
      this.errorIsTrue=true;
      },);
  }

}
