import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galeria = true;

  mostrarGaleria(mostrarSiNo:  boolean) {
    this.galeria = mostrarSiNo;
  }

   usuario = {
    "nombre":"sergioelperrillo",
    "alias": "@sergioelperrillo",
    "fotoPerfil": "../assets/imagenes/sergio.jpg",
    "seguidores": 12,
    "seguidos": 777,
    "bio": "mirando el horizonte", 
    "publicaciones" : [ {
      "usuario": "@eldog",
      "imagen": "../assets/imagenes/ostia.png",
      "caption": "en efecto mi estmiado",
      "comentario": "", 
      "id": "eldog1"
    },
    {
      "usuario": "@eligor",
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
    }
    ]
  } 

}
