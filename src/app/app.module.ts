import { ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import{MatStepperModule} from '@angular/material/stepper';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CompteComponent,
    ContactComponent,
    MainPageComponent,
    TrocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
