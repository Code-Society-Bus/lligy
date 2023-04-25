import { Component, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  isActive = false;


 /*  scrollTo(componente: any) {
    const posicion = componente.offsetTop;
    window.scrollTo({ top: posicion, behavior: 'smooth' });
  } */

}

