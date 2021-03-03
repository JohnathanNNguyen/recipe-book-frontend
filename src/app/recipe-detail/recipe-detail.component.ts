import { Component, OnInit } from '@angular/core';
import { TastyAPIService } from 'src/app/tasty-api.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails;
  constructor(private tastyApi: TastyAPIService) {}

  ngOnInit(): void {
    this.recipeDetails = this.tastyApi.recipeDetail;
    console.log('test', this.recipeDetails);
  }

  onSave() {}
}
