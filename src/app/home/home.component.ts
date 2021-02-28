import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpoonAPIService } from '../spoon-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchedRecipes;
  isLoading: boolean = false;
  constructor(private spoonApi: SpoonAPIService, private router: Router) {}

  ngOnInit(): void {}

  onSearch(input: string) {
    this.isLoading = true;
    this.spoonApi.searchRecipes(input).subscribe((data) => {
      this.searchedRecipes = data;
      this.spoonApi.searchedRecipes = this.searchedRecipes.results;
      this.isLoading = false;
      this.router.navigate(['search/', input]);
      console.log(this.spoonApi.searchedRecipes);
    });
  }
}
