import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TshirtComponent } from './components/tshirt/tshirt.component';
import { ShoeComponent } from './components/shoe/shoe.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CapComponent } from './components/cap/cap.component';
import { BackgoundComponent } from './components/backgound/backgound.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TshirtComponent,
    ShoeComponent,
    ButtonsComponent,
    CapComponent,
    BackgoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
