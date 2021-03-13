import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BasicStructureComponent } from './components/basic-structure/basic-structure.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaxDeductionsComponent } from './components/tax-deductions/tax-deductions.component';
import { TaxExemptionsComponent } from './components/tax-exemptions/tax-exemptions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BasicStructureComponent,
    TaxDeductionsComponent,
    TaxExemptionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
