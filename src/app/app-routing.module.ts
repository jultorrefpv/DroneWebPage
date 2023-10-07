import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AerialPhotographyComponent } from "./aerial-photography/aerial-photography.component";
import { AdvertismentComponent } from "./advertisment/advertisment.component"
import { EventsComponent } from "./events/events.component"
import { FpvVideosComponent } from './fpv-videos/fpv-videos.component';


const routes: Routes = [
  { path: '', redirectTo: '/servicio-dron', pathMatch: 'full'},
  { path: 'servicio-dron', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'servicio-fotografia-aerea-con-drones', component: AerialPhotographyComponent },
  { path: 'servicio-publicidad-con-drones', component: AdvertismentComponent },
  { path: 'servicio-grabacion-de-eventos-con-drones', component: EventsComponent },
  { path: 'servicio-grabacion-de-videos-con-drones-fpv', component: FpvVideosComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
