import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {




  items = [
    {
      image: '../../../assets/img-carousel/image 1.png"',
      nombre: 'ASESORÍA EN LA CALIDAD DE LA TELA',
      button1: '',
      alt:''
    },
    {
      image: '../../../assets/img-carousel/image 2.png',
      nombre:'MÁS DE 15 AÑOS DE EXPERIENCIA',
      button2: '',
      alt:''
    },
    {
      image: '../../../assets/img-carousel/imagen 3.png',
      nombre:'BORDADO COMPUTARIZADO DE CALIDAD',
      button3: '',
      alt:''
    },
    {
      image: '../../../assets/img-carousel/image 4.png',
      nombre:'RÁPIDA CAPACIDAD DE ATENCIÓN',
      button4: '',
      alt:''
    }
  ]

}


