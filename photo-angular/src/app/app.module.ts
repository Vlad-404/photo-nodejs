import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavDesktopComponent } from './navbar/desktop/nav-desktop.component'
import { NavMobileComponent } from './navbar/mobile/nav-mobile.component'

@NgModule({
  declarations: [
    AppComponent,
    NavDesktopComponent,
    NavMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
