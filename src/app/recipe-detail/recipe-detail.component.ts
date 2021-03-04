import { Component, OnInit } from '@angular/core';
import { TastyAPIService } from 'src/app/tasty-api.service';
import { JwtService } from '../jwt.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails;
  itemSaved: boolean = false;
  constructor(
    private tastyApi: TastyAPIService,
    private readonly rest: RestService,
    private readonly jwtService: JwtService
  ) {}

  ngOnInit(): void {
    this.recipeDetails = this.tastyApi.recipeDetail;
    console.log('test', this.recipeDetails);
  }

  onSave() {
    // const userJwt = this.jwtService.getJwt();
    this.rest.saveRecipe({
      id: this.recipeDetails.id,
      name: this.recipeDetails.name,
      image: this.recipeDetails.thumbnail_url,
    });
    this.itemSaved = true;
  }

  onDelete(id) {
    this.rest.deleteRecipe(id);
    this.itemSaved = false;
  }
}
