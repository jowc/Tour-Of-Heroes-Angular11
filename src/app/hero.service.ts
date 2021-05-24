import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   console.log(heroes)
  //   return heroes;
  // }

  constructor() { }
}
