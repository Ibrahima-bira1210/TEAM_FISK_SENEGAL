import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationsComponent } from './organisations.component';
import {StatistiqueComponent} from "./statistique/statistique.component";
import {PresentationComponent} from "./presentation/presentation.component";
import {ReportsComponent} from "./reports/reports.component";
import {ReportDetailsComponent} from "./report-details/report-details.component";
import {BoiteLettreComponent} from "./boite-lettre/boite-lettre.component";
import {BoiteLettreDetailsComponent} from "./boite-lettre-details/boite-lettre-details.component";

const routes: Routes = [
  { path: '', component: OrganisationsComponent },
  {path: "presentation", component :PresentationComponent},
  {path: "reports", component : ReportsComponent},
  {path: "reports/details", component : ReportDetailsComponent},
  {path : "boite-a-lettre", component:BoiteLettreComponent},
  {path : "boite-a-lettre/details", component:BoiteLettreDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationsRoutingModule { }
