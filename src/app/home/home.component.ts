import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../interfaces/recipe.interface';
import { JwtService } from '../jwt.service';
import { RestService } from '../rest.service';
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

  onSearch(input: string) {
    this.isLoading = true;
    this.tastyApi.searchRecipes(input).subscribe((data) => {
      this.searchedRecipes = data;
      this.tastyApi.searchedRecipes = this.searchedRecipes.results;
      this.isLoading = false;
      this.router.navigate(['search/', input]);
    });
  }
}
