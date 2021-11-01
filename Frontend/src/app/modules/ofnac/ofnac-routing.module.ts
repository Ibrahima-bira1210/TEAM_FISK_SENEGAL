import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfnacComponent } from './ofnac.component';
import {OrganisationsListeComponent} from "./organisations-liste/organisations-liste.component";
import {OrganisationDetailsComponent} from "./organisation-details/organisation-details.component";

const routes: Routes = [
  { path: '', component: OfnacComponent },
  { path: 'liste-des-organisations', component: OrganisationsListeComponent },
  { path: 'liste-des-organisations/organisation-details', component: OrganisationDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfnacRoutingModule { }
