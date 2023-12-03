import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesDataService } from '../../heroes-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  heroId: number;
  heroData;

  constructor(private activatedRoute: ActivatedRoute, private dataService: HeroesDataService){
  }

  ngOnInit(){
    this.heroId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.heroData = this.dataService.getHero(this.heroId);
  }
  goBack(){
    history.back();
  }
}
