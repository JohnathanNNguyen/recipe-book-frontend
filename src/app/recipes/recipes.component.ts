import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TastyAPIService } from 'src/app/tasty-api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  public isLoading: boolean = false;
  public randomRecipes;
  public recipesToDisplay: [];
  public recipeDetail;
  constructor(private tastyApi: TastyAPIService, private router: Router) {}

  ngOnInit(): void {
    this.onRandom('0', '21');
  }

  onRandom(from: string, quantity: string) {
    this.isLoading = true;
    this.tastyApi.tastyApiList(from, quantity).subscribe((data) => {
      this.randomRecipes = data;
      this.recipesToDisplay = this.randomRecipes.results;
      this.isLoading = false;
    });
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
