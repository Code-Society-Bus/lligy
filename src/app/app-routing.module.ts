import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AboutAndServicesComponent } from './components/about-and-services/about-and-services.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
    { path: 'navbar', component: NavbarComponent},
    { path: 'about', component: AboutAndServicesComponent},
    { path: 'services', component: OurServicesComponent},
    { path: 'clients', component: OurClientsComponent},
    { path: 'contact', component: FormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
