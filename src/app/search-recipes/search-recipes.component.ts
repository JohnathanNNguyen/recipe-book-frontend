import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TastyAPIService } from '../tasty-api.service';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss'],
})
export class SearchRecipesComponent implements OnInit {
  public isLoading: boolean;
  public searchedRecipes: [];
  constructor(private tastyApi: TastyAPIService, private router: Router) {}

  ngOnInit(): void {
    this.searchedRecipes = this.tastyApi.searchedRecipes;
  }

  getRecipe(id: string) {
    this.isLoading = true;
    this.tastyApi.getRecipe(id).subscribe((data) => {
      this.tastyApi.recipeDetail = data;
      this.isLoading = false;
      this.router.navigate(['recipes/', id]);
    });
  }
}
