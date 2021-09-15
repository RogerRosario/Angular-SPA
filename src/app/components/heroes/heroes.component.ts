import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../Servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[] = [];

  constructor(private _heroeService:HeroesService, private router:Router) { }

  ngOnInit(): void {
    
    this.heroes = this._heroeService.getHeroes();

  }

  verHeroe(idx: number){

    this.router.navigate(['/heroe', idx]);
    console.log(idx);

  }
  
}
