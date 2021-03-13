import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BasicStructureComponent } from './components/basic-structure/basic-structure.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaxDeductionsComponent } from './components/tax-deductions/tax-deductions.component';
import { TaxExemptionsComponent } from './components/tax-exemptions/tax-exemptions.component';
import { SharedModule } from './shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DisplayPriceComponent } from './components/common/display-price/display-price.component';
import { PricePipe } from './pipes/price.pipe';
import { TaxesComponent } from './components/taxes/taxes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DisplayRecordComponent } from './components/common/display-record/display-record.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BasicStructureComponent,
    TaxDeductionsComponent,
    TaxExemptionsComponent,
    NavigationComponent,
    DisplayPriceComponent,
    PricePipe,
    TaxesComponent,
    PageNotFoundComponent,
    DisplayRecordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
