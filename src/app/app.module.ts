import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{ ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { JobsDetailsComponent } from './pages/jobs-details/jobs-details.component';

import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { AplicationCardComponent } from './components/aplication-card/aplication-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobsFormComponent } from './components/jobs-form/jobs-form.component';

import { AplicationsService } from './services/aplications.service';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    AplicationCardComponent,
    FooterComponent,
    JobsFormComponent,
    JobsDetailsComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	AppRoutingModule,
	ReactiveFormsModule,
	SharedModule
  ],
  providers: [AplicationsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
