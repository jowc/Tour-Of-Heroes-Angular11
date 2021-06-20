import { Component, OnInit} from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes = HEROES
  selectedHero?: Hero;
  heroes: Hero[] = [];

  
  constructor(private heroService: HeroService,  private messageService: MessageService) {
    // this.heroes = heroService.getHeroes()
  }
  
  ngOnInit(): void {
    this.getHeroes()
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
