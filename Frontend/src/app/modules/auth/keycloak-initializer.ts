import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from '../../../environments/environment';
import {AuthService} from "../../services/Auth/auth.service";

export function initializer(keycloak: KeycloakService, authService : AuthService): () => Promise<boolean> {

  // let r : string;
  // if(authService.getRoles()[3]=="admin"){
  //   r = "http://localhost:4200/ofnac/liste-des-organisations"
  // }else{
  //   r = "http://localhost:4200/organisations/presentation"
  // }

  const options: KeycloakOptions = {
    config : environment.keycloak,
    loadUserProfileAtStartUp: true,
    initOptions: {
      onLoad: 'check-sso',
      // onLoad: 'login-required',
      checkLoginIframe: false,
      // redirectUri: "http://localhost:4200/organisations/presentation",
    },
    bearerExcludedUrls: []
  };

  return () => keycloak.init(options);
}
