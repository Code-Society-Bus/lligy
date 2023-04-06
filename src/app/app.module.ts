import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutAndServicesComponent } from './components/about-and-services/about-and-services.component';
import { AboutComponent } from './components/about-and-services/about/about.component';
import { ServiceLligyComponent } from './components/about-and-services/service-lligy/service-lligy.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { SizeGuideComponent } from './components/size-guide/size-guide.component';
import { SizeGuideModule } from './components/size-guide/size-guide.module';
import { FormsComponent } from './components/forms/forms.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/component/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrouselModule } from './components/carousel/carousel.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutAndServicesComponent,
    AboutComponent,
    ServiceLligyComponent,
    OurServicesComponent,
    SizeGuideComponent,
    FormsComponent,
    OurClientsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    SizeGuideModule,
    CarrouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
