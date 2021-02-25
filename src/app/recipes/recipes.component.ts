import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpoonAPIService } from '../spoon-api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  isLoading: boolean = false;
  randomRecipes;
  recipesToDisplay;
  recipeDetail;
  constructor(private spoonApi: SpoonAPIService, private router: Router) {}

  ngOnInit(): void {}

  onRandom() {
    this.isLoading = true;
    this.spoonApi.tastyApiList().subscribe((data) => {
      this.randomRecipes = data;
      this.recipesToDisplay = this.randomRecipes.results;
      console.log(this.recipesToDisplay);
      this.isLoading = false;
    });
  }
  getRecipe(id: string) {
    this.spoonApi.getRecipe(id).subscribe((data) => {
      this.spoonApi.recipeDetail = data;
      console.log(data);
      this.router.navigate(['recipes/details']);
    });
  }
}
