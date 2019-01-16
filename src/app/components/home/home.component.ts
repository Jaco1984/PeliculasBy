import { PeliculasService } from './../../service/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  populares: any;
  constructor( private _peliculasService: PeliculasService) {
    
    this._peliculasService.getPeliculas().subscribe(
      data => {
        console.log("Populares", data);
        this.populares = data;
      });
   }
  
  ngOnInit() {
  }

}
