// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Component imports
import { AppComponent } from './app.component';
import { NavDesktopComponent } from './navbar/desktop/nav-desktop.component'
import { NavMobileComponent } from './navbar/mobile/nav-mobile.component'
import { TitleComponent } from './title/title.component'
import { ContactComponent } from './contact/contact.component'
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component'
import { GalleryHomeComponent } from './gallery-home/gallery-home.component'
import { FooterComponent } from './footer/footer.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    NavDesktopComponent,
    NavMobileComponent,
    TitleComponent,
    ContactComponent,
    HeroCarouselComponent,
    GalleryHomeComponent,
    FooterComponent,
    GalleriesComponent,
    HomeComponent,
    ContactPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
