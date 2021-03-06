import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  
  constructor(private heroservice: HeroService, 
    private location: Location, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {

    const id = +this.route.snapshot.paramMap.get('id');
    this.heroservice.getHero(id).subscribe((hero => this.hero = hero)

  }

  goBack(): void {
    this.location.back();
  }

  save(): void {

    this.heroservice.updateHero(this.hero).subscribe(() => this.goBack());

  }

}
