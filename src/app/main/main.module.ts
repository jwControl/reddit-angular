import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemCardComponent } from './item-card/item-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule { }
