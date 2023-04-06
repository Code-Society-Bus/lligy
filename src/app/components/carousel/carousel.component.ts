import { Component } from '@angular/core';
import { Swiper } from 'swiper';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  images = [
    {
      url: '../../../assets/img-carousel/image 1.png',
      alt: 'imagen calidad tela'
    },
    {
      url: '../../../assets/img-carousel/image 2.png',
      alt: 'imagen 15 años experiencia'
    },
    {
      url: '../../../assets/img-carousel/imagen 3.png',
      alt: 'imagen bordado computarizado'
    },
    {
      url: '../../../assets/img-carousel/image 4.png',
      alt: 'imagen rapida atencion'
    }
  ];

  swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


