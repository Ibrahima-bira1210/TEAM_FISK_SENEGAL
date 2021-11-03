import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(protected router: Router, protected keycloakAngular: KeycloakService, private authService : AuthService) {
    super(router, keycloakAngular);
  }


  public async isAccessAllowed(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloakAngular.login({
        redirectUri: window.location.origin + state.url,
      });
    }



    // Get the roles required from the route.
    const requiredRoles = route.data.roles;
    // Allow the user to to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }

}
