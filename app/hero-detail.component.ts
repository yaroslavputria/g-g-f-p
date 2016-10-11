import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-template.html',
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
