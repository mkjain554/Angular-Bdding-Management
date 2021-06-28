//After App-routing.module this is our main page which is/will handle the routing for the apges

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {PagesComponent} from '../pages/pages.component';
import {BidComponent} from '../pages/bid/bid.component'

const routes: Routes = [
  {
  path: '',
  component: PagesComponent,
  children: [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'product/:id', component: BidComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
