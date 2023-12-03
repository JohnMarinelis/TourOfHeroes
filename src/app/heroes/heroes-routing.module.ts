import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { DetailViewModule } from '../detail-view/detail-view.module';
import { DetailComponent } from '../detail-view/detail/detail.component';

const routes: Routes = [
  { path: '', component: HeroesListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
