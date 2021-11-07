
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'item-detail',
  component: ItemDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
