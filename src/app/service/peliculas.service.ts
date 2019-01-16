import { map } from 'rxjs/internal/operators';
import { Jsonp, Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apyKey:string = '1f3ac7ad2372d8c095c8f5f321d3d69b';
  private urlMovie:string = 'https://api.themoviedb.org/3';
  peliculas: any[] = [];
 

  constructor(private _jsonp: Jsonp,
              private _http: Http) {  }

  getPeliculas(){
    let url = `${ this.urlMovie }/discover/movie?sort_by=popularity.desc&api_key=${ this.apyKey }&languages=es&callback=JSONP_CALLBACK`;
    
    return this._jsonp.get( url).pipe(map( datos => datos.json().results   ));
    
  }

  getBuscar(texto: string){
    let url = `${this.urlMovie}/search/multi?query=${ texto }
    &sort_by=popularity.desc&api_key=${this.apyKey}&language=es&callback=JSONP_CALLBACK`;
   return this._jsonp.get(url).pipe(map( data =>{
     this.peliculas = data.json().results;
      return data.json().results;
  
   } ));
  }

  getInformacion( id: number ){
    console.log("informacion_id", id);
    let url = `${this.urlMovie}/movie/${ id }?api_key=${this.apyKey}&language=es&callback=JSONP_CALLBACK`;
    console.log(url);
    return this._jsonp.get(url).pipe(map( data => {
   
    console.log(data);
    return data.json();
    }   ));
  }
 
}
