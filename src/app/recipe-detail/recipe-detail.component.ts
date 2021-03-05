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
  public loggedIn: boolean = false;
  public recipeDetails;
  public usersRecipes;
  public itemSaved: boolean;
  constructor(
    private tastyApi: TastyAPIService,
    private readonly rest: RestService,
    private readonly jwtService: JwtService
  ) {}

  ngOnInit(): void {
    this.recipeDetails = this.tastyApi.recipeDetail;
    if (this.jwtService.getJwt()) {
      this.loggedIn = true;
      this.usersRecipes = this.rest.usersRecipes;
      console.log('recipe-detail', this.usersRecipes);
      for (let i = 0; i < this.usersRecipes.length; i++) {
        console.log(this.usersRecipes[i].recipeId);
        console.log('recipeDetails here', this.recipeDetails.id);
        if (this.usersRecipes[i].recipeId == this.recipeDetails.id) {
          this.itemSaved = true;
        } else {
          this.itemSaved = false;
        }
      }
    }
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
