import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  pelicula:any;
  // tslint:disable-next-line:no-input-rename
  @Input('posterPopulares') posterPopulares;
  // tslint:disable-next-line:no-input-rename
  @Input('titulo_populares') titulo_populares;
  constructor() { }

  ngOnInit() {
  }

}
