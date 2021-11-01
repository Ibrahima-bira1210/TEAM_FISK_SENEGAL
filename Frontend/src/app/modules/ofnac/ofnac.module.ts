import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfnacRoutingModule } from './ofnac-routing.module';
import { OfnacComponent } from './ofnac.component';
import { OrganisationsListeComponent } from './organisations-liste/organisations-liste.component';
import { OrganisationDetailsComponent } from './organisation-details/organisation-details.component';
import {OrganisationsModule} from "../organisations/organisations.module";


@NgModule({
  declarations: [
    OfnacComponent,
    OrganisationsListeComponent,
    OrganisationDetailsComponent
  ],
    imports: [
        CommonModule,
        OfnacRoutingModule,
        OrganisationsModule
    ]
})
export class OfnacModule { }
