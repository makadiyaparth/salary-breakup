import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicStructureComponent } from './components/basic-structure/basic-structure.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TaxDeductionsComponent } from './components/tax-deductions/tax-deductions.component';
import { TaxExemptionsComponent } from './components/tax-exemptions/tax-exemptions.component';
import { TaxesComponent } from './components/taxes/taxes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'basic-structure',
    component: BasicStructureComponent,
  },
  {
    path: 'tax-exemption',
    component: TaxExemptionsComponent,
  },
  {
    path: 'tax-deduction',
    component: TaxDeductionsComponent,
  },
  {
    path: 'taxes',
    component: TaxesComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
