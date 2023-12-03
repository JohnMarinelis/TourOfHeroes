import { Component, inject } from '@angular/core';
import { HeroesDataService } from '../../heroes-data.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  heroData = [];
  heroDataKeys = [];
  heroesDataService = inject(HeroesDataService);

  constructor(){
    this.heroData = this.heroesDataService.getAllHeroList();
    this.heroDataKeys = this.heroesDataService.getAllHeroListKeys();
  }
}
