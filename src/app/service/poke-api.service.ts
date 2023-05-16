import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

//Observable
import {Observable, tap} from "rxjs";
import {BaseService} from "./base-service.service";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService extends BaseService{

  private url:string = 'https://pokeapi.co/api/v2/pokemon'
  listAllPokemons():Observable<any>{
    return this.get<any>(`${this.url}/?offset=0&limit=100`)
  }
  //dar um jeito de pegar o ID da url e jogar na function
  //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100
  //https://pokeapi.co/api/v2/pokemon/100/
  listPokemonById(id:number):Observable<any> {
    return this.get<any>(`${this.url}/${id}/`)
  }
  getPokemonName(id:number):Observable<any>{
    return this.get<any>(`${this.url}-species/${id}/`)
  }
  /*
  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url)
      .pipe(
      tap(res=>res),
      tap(res=>{
        console.log(res)
      })
    )
  }

   */


}
