import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TastyAPIService } from '../tasty-api.service';

@Component({
  selector: 'app-search-recipes',
  templateUrl: './search-recipes.component.html',
  styleUrls: ['./search-recipes.component.scss'],
})
export class SearchRecipesComponent implements OnInit {
  private searchId;
  public isLoading: boolean = true;
  public searchedRecipes;
  constructor(
    private tastyApi: TastyAPIService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.searchId = this.route.snapshot.queryParams.id;
  }

  ngOnInit(): void {
    // this.searchedRecipes = this.tastyApi.searchedRecipes;
    this.tastyApi.searchRecipes(this.searchId).subscribe((data) => {
      this.searchedRecipes = data;
      this.isLoading = false;
    });
  }

  getRecipe(recipeId: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: { id: recipeId },
    };
    this.router.navigate(['recipes'], navigationExtras);
  }
}
