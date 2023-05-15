import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

//Observable
import {Observable, tap} from "rxjs";
import {BaseService} from "./base-service.service";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService extends BaseService{

  listAllPokemons():Observable<any>{
    return this.get<any>(`?offset=0&limit=100`)
  }
  //dar um jeito de pegar o ID da url e jogar na function
  //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100
  //https://pokeapi.co/api/v2/pokemon/100/
  listStatusPokemons(id:string):Observable<any>{
    return this.get<any>(`/${id}/`)
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
