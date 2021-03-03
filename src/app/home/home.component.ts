import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TastyAPIService } from '../tasty-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
      console.log(this.tastyApi.searchedRecipes);
    });
  }
  onFetch() {
    this.tastyApi.getRecipesFromBackend().subscribe((data) => {
      console.log(data);
    });
  }
}
