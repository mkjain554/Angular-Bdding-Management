import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { BidComponent } from './bid/bid.component';
// import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';
// import { BrowserModule } from '@angular/platform-browser';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    BidComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    // BrowserModule
  ]
})
export class PagesModule { }
