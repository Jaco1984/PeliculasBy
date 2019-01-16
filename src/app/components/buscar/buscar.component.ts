import { PeliculasService } from './../../service/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
 
  buscar: string = "";
  constructor( public _peliculasService: PeliculasService,
               public  activatedRoute: ActivatedRoute ) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      if(params['texto']){
        this.buscar = params['texto'];
        this.getBuscar();
      }
    })

                }

  ngOnInit() {
  }

  getBuscar(){
    console.log("buscar");
    if(this.buscar.length === 0){
      return ;
    }
    this._peliculasService.getBuscar(this.buscar)
    .subscribe( data =>{
      console.log(data);
    } )

  }

 
}
