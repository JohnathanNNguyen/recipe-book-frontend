import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TastyAPIService } from '../tasty-api.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  public pageOne: boolean = true;
  public pageTwo: boolean = false;
  public pageThree: boolean = false;
  public isLoading: boolean = false;
  public randomRecipes;
  public recipesToDisplay;
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
      console.log(this.recipesToDisplay);
      this.isLoading = false;
    });
  }

  getRecipe(recipeId: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: { id: recipeId },
    };
    this.router.navigate(['recipes'], navigationExtras);
  }
  onShowMore() {
    this.onRandom('22', '21');
    this.pageOne = false;
    this.pageTwo = true;
  }
  onShowMore2() {
    this.onRandom('43', '21');
    this.pageTwo = false;
    this.pageThree = true;
  }
  backToPageOne() {
    this.onRandom('0', '21');
    this.pageTwo = false;
    this.pageOne = true;
  }
}
