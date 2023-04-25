import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lligy_web';

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  isActive = false;

  constructor(){}


  @ViewChild('aboutComponent') aboutComponent!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;

  scrollToComponent() {
    this.aboutComponent.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.navbar.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


  imgSrc: string = '../../../../assets/icono-whatsapp-desktops.png';
  imgHoverSrc: string = '../../../../assets/icono-whatsapp-hover.png';
  
  isHovered = true;
}

