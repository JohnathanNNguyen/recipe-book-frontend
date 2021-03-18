import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Recipe } from '../interfaces/recipe.interface';
import { TastyAPIService } from '../tasty-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public usersRecipes: Recipe[] = [];
  searchedRecipes;
  isLoading: boolean = false;
  constructor(private tastyApi: TastyAPIService, private router: Router) {}

  ngOnInit(): void {}

  onSearch(searchId) {
    let navigationExtras: NavigationExtras = {
      queryParams: { id: searchId },
    };
    this.router.navigate(['search'], navigationExtras);
  }
}
