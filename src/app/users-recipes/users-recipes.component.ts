import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { TastyAPIService } from '../tasty-api.service';

@Component({
  selector: 'app-users-recipes',
  templateUrl: './users-recipes.component.html',
  styleUrls: ['./users-recipes.component.scss'],
})
export class UsersRecipesComponent implements OnInit {
  public usersRecipes: [] = [];
  public isLoading: boolean = true;
  public savedRecipes: boolean;
  constructor(
    private readonly restService: RestService,
    private readonly tastyApi: TastyAPIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restService.getRecipes().then((res) => {
      this.usersRecipes = res.data;
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
