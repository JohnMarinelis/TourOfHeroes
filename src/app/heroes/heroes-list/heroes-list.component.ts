import { Component, inject } from '@angular/core';
import { HeroesDataService } from '../../heroes-data.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  heroData = [];
  heroDataKeys = [];
  heroesDataService = inject(HeroesDataService);

  constructor(){
    this.heroData = this.heroesDataService.getAllHeroList();
    this.heroDataKeys = this.heroesDataService.getAllHeroListKeys();
  }
  
}
