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
import { CarouselModule } from './components/carousel/carousel.module';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';


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
    CarouselModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
