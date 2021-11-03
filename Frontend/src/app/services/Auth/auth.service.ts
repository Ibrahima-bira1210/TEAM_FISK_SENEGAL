import {Injectable} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {KeycloakTokenParsed} from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) {}


  public getLoggedUser(): KeycloakTokenParsed | undefined {
    try {
      return this.keycloakService.getKeycloakInstance()
        .idTokenParsed;
    } catch (e) {
      console.error("Exception", e);
      return undefined;
    }
  }

  public logout() : void {
    this.keycloakService.logout();
  }

  public redirectToProfile(): void {
    this.keycloakService.getKeycloakInstance().accountManagement();
  }

  public getRoles(): string[] {
    return this.keycloakService.getUserRoles();
  }
}
