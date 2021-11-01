import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ofnac', loadChildren: () => import('./modules/ofnac/ofnac.module').then(m => m.OfnacModule) },
  { path: 'organisations', loadChildren: () => import('./modules/organisations/organisations.module').then(m => m.OrganisationsModule) },
  { path: '', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
