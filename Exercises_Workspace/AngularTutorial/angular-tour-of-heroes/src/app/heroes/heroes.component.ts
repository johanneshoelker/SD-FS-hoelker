import { Component, OnInit } from '@angular/core';//You always import the Component symbol from the Angular core library and annotate the component class with @Component. @Component is a decorator function that specifies the Angular metadata for the component.
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({//here are the pointers
  selector: 'app-heroes',// the component's CSS element selector
  templateUrl: '../htmls/heroes.component.html',//the location of the component's template file.
  styleUrls: ['./heroes.component.css']//he location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {//Always export the component class so you can import it elsewhere ... like in the AppModule.
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {//a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}
}
