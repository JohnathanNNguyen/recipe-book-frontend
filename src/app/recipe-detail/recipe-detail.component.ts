import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TastyAPIService } from 'src/app/tasty-api.service';
import { JwtService } from '../jwt.service';
import { LoginPageComponent } from '../login-page/login-page.component';
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
  duration: number = 3;
  constructor(
    private tastyApi: TastyAPIService,
    private readonly rest: RestService,
    private readonly jwtService: JwtService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.recipeDetails = this.tastyApi.recipeDetail;
    if (this.jwtService.getJwt()) {
      this.loggedIn = true;
      this.usersRecipes = this.rest.usersRecipes;
      for (let i = 0; i < this.usersRecipes.length; i++) {
        if (this.usersRecipes[i].recipeId == this.recipeDetails.id) {
          this.itemSaved = true;
          break;
        } else {
          this.itemSaved = false;
        }
      }
    }
  }

  onSave(content, action) {
    this.rest.saveRecipe({
      id: this.recipeDetails.id,
      name: this.recipeDetails.name,
      image: this.recipeDetails.thumbnail_url,
    });
    this.itemSaved = true;
    this.snackBar.open(content, action, {
      duration: 2000,
    });
  }

  onDelete(id, content, action) {
    this.rest.deleteRecipe(id);
    this.itemSaved = false;
    this.snackBar.open(content, action, {
      duration: 2000,
    });
  }

  onLogin() {
    this.dialog.open(LoginPageComponent);
  }
}
