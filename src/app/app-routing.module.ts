import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail-view/detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
  { path: 'detail/:id',
    loadChildren: () => import('./detail-view/detail-view.module').then(m=>m.DetailViewModule)},
  { path: '', component: HomeComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
