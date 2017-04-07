import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMessage: string;
  heroes: Hero[];
  mode = 'Observable';
  constructor (private heroService: HeroService) {}
  ngOnInit() { this.getHeroes(); }
  getHeroes() {
    this.heroService.getHeroes()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }

}
