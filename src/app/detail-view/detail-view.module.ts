import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DetailViewRoutingModule } from './detail-view-routing.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DetailViewRoutingModule
  ]
})
export class DetailViewModule { }
