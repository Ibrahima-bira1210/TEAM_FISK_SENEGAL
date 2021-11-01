import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationsRoutingModule } from './organisations-routing.module';
import { OrganisationsComponent } from './organisations.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MapComponent } from './map/map.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { BoiteLettreComponent } from './boite-lettre/boite-lettre.component';
import { BoiteLettreDetailsComponent } from './boite-lettre-details/boite-lettre-details.component';
import {GoogleMapsModule} from "@angular/google-maps";


@NgModule({
  declarations: [
    OrganisationsComponent,
    StatistiqueComponent,
    PresentationComponent,
    MapComponent,
    ReportsComponent,
    ReportDetailsComponent,
    BoiteLettreComponent,
    BoiteLettreDetailsComponent
  ],
  imports: [
    CommonModule,
    OrganisationsRoutingModule,
    GoogleMapsModule
  ],
  exports : [
    MapComponent,
  ]
})
export class OrganisationsModule { }
