import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  //BD
  publicaciones = [ {
    "usuario": "@Cris_Cross",
    "imagen": "../assets/imagenes/ostia.png",
    "caption": "nO0Oo0O0o",
    "comentario": "", 
    "id": "eldog1"
  },
  {
    "usuario": "@Cris_Cross",
    "imagen": "../assets/imagenes/eddd.png",
    "caption": "donde estan?",
    "comentario": "", 
    "id": "eligor1"
  },
  {
    "usuario": "@angelelperro",
    "imagen": "../assets/imagenes/pit.jpg",
    "caption": "intrigao",
    "comentario": "", 
    "id": "angelelperro1"
  },
  {
    "usuario": "@OLIVA",
    "imagen": "../assets/imagenes/OLIVA.jpg",
    "caption": "Tu no mete cabra",
    "comentario": "", 
    "id": "1234"
  }
  ];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }


}
