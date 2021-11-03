import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./services/Auth/auth.guard";

const routes: Routes = [
  { path: 'ofnac', loadChildren: () => import('./modules/ofnac/ofnac.module').then(m => m.OfnacModule),
    canActivate: [AuthGuard],
    data: {
      roles: ["admin"]
    }
  },
  {
    path: 'organisations',
    loadChildren: () => import('./modules/organisations/organisations.module').then(m => m.OrganisationsModule),
    canActivate: [AuthGuard],
    data: {
      roles: ["user"]
    }
  },
  { path: '', redirectTo: '', pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      roles: ["admin"]
    }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
