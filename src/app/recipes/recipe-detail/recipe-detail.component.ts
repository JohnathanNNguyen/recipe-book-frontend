import { Component, OnInit } from '@angular/core';
import { SpoonAPIService } from 'src/app/spoon-api.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails;
  constructor(private spoonApi: SpoonAPIService) {}

  ngOnInit(): void {
    this.recipeDetails = this.spoonApi.recipeDetail;
    console.log('test', this.recipeDetails);
  }
}
