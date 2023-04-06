import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './carousel.component';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CarouselModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarrouselModule { }

