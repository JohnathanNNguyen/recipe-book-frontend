import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpoonAPIService } from '../spoon-api.service';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss'],
})
export class SearchRecipesComponent implements OnInit {
  isLoading;
  searchedRecipes;
  constructor(private spoonApi: SpoonAPIService, private router: Router) {}

  ngOnInit(): void {
    this.searchedRecipes = this.spoonApi.searchedRecipes;
    console.log(this.searchedRecipes);
  }

  getRecipe(id: string) {
    this.isLoading = true;
    this.spoonApi.getRecipe(id).subscribe((data) => {
      this.spoonApi.recipeDetail = data;
      this.isLoading = false;
      console.log('test', data);
      this.router.navigate(['recipes/', id]);
    });
  }
}
