import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AboutAndServicesComponent } from 'src/app/components/about-and-services/about-and-services.component';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,RouterModule,
  ],
exports: [NavbarComponent]
})
export class SharedModule{ }

