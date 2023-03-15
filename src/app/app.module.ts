import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CompteComponent } from './views/compte/compte.component';
import { ContactComponent } from './views/contact/contact.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { TrocComponent } from './views/troc/troc.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CompteComponent,
    ContactComponent,
    MainPageComponent,
    TrocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
