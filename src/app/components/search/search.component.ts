import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  searchText:string;
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
  
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchText = params['text'];
      this.heroes = this._heroesService.searchHeroes(params['text']);
    })
  }


}
