import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TastyAPIService } from 'src/app/tasty-api.service';

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
  constructor(private tastyApi: TastyAPIService, private router: Router) {}

  ngOnInit(): void {
    this.onRandom();
  }

  onRandom() {
    this.isLoading = true;
    this.tastyApi.tastyApiList().subscribe((data) => {
      this.randomRecipes = data;
      this.recipesToDisplay = this.randomRecipes.results;
      console.log(this.recipesToDisplay);
      this.isLoading = false;
    });
  }
  getRecipe(id: string) {
    this.isLoading = true;
    this.tastyApi.getRecipe(id).subscribe((data) => {
      this.tastyApi.recipeDetail = data;
      this.isLoading = false;
      console.log(data);
      this.router.navigate(['recipes/', id]);
    });
  }
}
