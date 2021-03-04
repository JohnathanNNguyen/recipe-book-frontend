import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { TastyAPIService } from '../tasty-api.service';

@Component({
  selector: 'app-users-recipes',
  templateUrl: './users-recipes.component.html',
  styleUrls: ['./users-recipes.component.scss'],
})
export class UsersRecipesComponent implements OnInit {
  usersRecipes;
  isLoading: boolean = false;
  constructor(
    private readonly restService: RestService,
    private readonly tastyApi: TastyAPIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.restService.getRecipes().then((res) => {
      this.usersRecipes = res.data;
      console.log(res);
    });
  }

  getRecipe(id: string) {
    this.isLoading = true;
    this.tastyApi.getRecipe(id).subscribe((data) => {
      this.tastyApi.recipeDetail = data;
      this.isLoading = false;
      console.log('test', data);
      this.router.navigate(['recipes/', id]);
    });
  }
}
