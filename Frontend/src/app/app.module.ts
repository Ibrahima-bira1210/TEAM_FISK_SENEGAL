import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./modules/auth/auth.module";
import {AuthService} from "./services/Auth/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    KeycloakAngularModule,
    HttpClientModule,
    AuthModule
  ],

  bootstrap: [AppComponent],
  exports: [
    NavbarComponent,
    HeaderComponent,
    AuthModule
  ]
})
export class AppModule { }
