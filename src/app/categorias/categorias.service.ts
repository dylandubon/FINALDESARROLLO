import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { HttpClient, HttpHeaders, HttpSentEvent } from "@angular/common/http";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
import { categorias } from "./categorias";

@Injectable({
    providedIn: 'root'
  })

export class categoriasservices
{
    //private API_SERVER = "https://api.spotify.com/v1/browse/categories";

    constructor (public http:HttpClient){}

    public getcategorias(id : string, token: any):Observable<any>
    {  const headers = new HttpHeaders({'Authorization':'Bearer '  + token});
    return this.http.get<categorias>('https://api.spotify.com/v1/browse/categories/' +id,{headers})
    .pipe(map(
      response => (
          response
      )
    ))
      }
       // return this.http.get(this.API_SERVER);}

    
getToken() {
    const url = `https://accounts.spotify.com/api/token`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });  
    let options = {headers: headers};
    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', '1805b3b6abdd4a8696f6d77a403a786e');
    body.set('client_secret', '7553fd63581c44aaadd0d4856f479a8d');
    return this.http.post(url, body, options).pipe(map(
      response => (response)
    ));
  }


  
}
