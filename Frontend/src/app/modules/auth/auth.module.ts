import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {initializer} from "./keycloak-initializer";
import {KeycloakService} from "keycloak-angular";
import {AuthService} from "../../services/Auth/auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    AuthService
  ]
})
export class AuthModule { }
