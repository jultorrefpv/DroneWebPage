import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {FormsModule} from '@angular/forms';
import { AerialPhotographyComponent } from './aerial-photography/aerial-photography.component';
import { AdvertismentComponent } from './advertisment/advertisment.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { EventsComponent } from './events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesPanelComponent } from './components/services-panel/services-panel.component';
import { FpvVideosComponent } from './fpv-videos/fpv-videos.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    AerialPhotographyComponent,
    AdvertismentComponent,
    HeaderPageComponent,
    EventsComponent,
    ServicesPanelComponent,
    FpvVideosComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
