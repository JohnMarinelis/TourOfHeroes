import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesDataService {
  protected heroList = [
    { id: 1, name: 'Dr.Nice'},
    { id: 2, name: 'Bombasto'},
    { id: 3, name: 'Celeritas'},
    { id: 4, name: 'Magneta'},
    { id: 5, name: 'RubberMan'},
    { id: 6, name: 'Dynama'},
    { id: 7, name: 'Dr.Strange'},
    { id: 8, name: 'Magma'},
    { id: 9, name: 'Tornado'},
  ];

  protected heroListKeys = [
    { key: 'id', label: 'ID'},
    { key: 'name', label: 'Name'},
  ]

  constructor() { }

  getAllHeroList() {
    return this.heroList;
  }

  getAllHeroListKeys() {
    return this.heroListKeys;
  }

  getHero(value: string | number){
    return this.heroList.find(x=> Object.values(x).includes(value));
  }

  // getHero(variable: T):{number,string} | undefined{
  //   return this.heroList.find(x=> x.id===variable);
  // }
}
