
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google:any;

interface marcadores {
  position: {
    lat: number,
    lng: number,
  };
  title: String,
}

@Component({
  selector: 'app-maps1',
  templateUrl: './maps1.component.html',
  styleUrls: ['./maps1.component.css']
})
export class Maps1Component implements OnInit {

  constructor(public navCtrl: NavController, public geolocation:Geolocation) { 
  }
  ngOnInit() {

  }
  // //Posicion actual
  //  lat:number
  //  lon:number
  //  total:string
  //   //Obtener posicion actual
  //  getGeolocation(){
  //   this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
  //     this.lat = geoposition.coords.latitude;
  //     this.lon = geoposition.coords.longitude;
  //   });
  // }  
  
  //mapa
  map:any;
  mapa:any;
  
  @ViewChild('map',{read:ElementRef, static:false}) mapRef?:ElementRef;
  ionViewDidEnter(){
    this.showMap();
  }
   
    //mostrar mapa
  showMap() {
    const mapEle  = document.getElementById('map');
    const myLatLng = {lat: 25.703313, lng: -100.342313};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 15,
      disableDefaultUI:true
      
    });
    
  //Evento para escuchar cuando el mapa se ha generado
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle?.classList.add('show-map'); 
      const marker={
        position:{
          lat: 25.703313,
          lng: -100.342313
        },
        title:'vet'
      }
      this.addMarker(marker);
    });
  }
  
  //Crear marker
  addMarker(marker: marcadores) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
    });
  }
}

