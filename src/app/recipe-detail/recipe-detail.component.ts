import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
  public isLoading = true;
  private recipeId;
  public recipeDetails;
  public usersRecipes;
  public itemSaved: boolean;
  duration: number = 3;
  constructor(
    private tastyApi: TastyAPIService,
    private readonly rest: RestService,
    public readonly jwtService: JwtService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.recipeId = this.route.snapshot.queryParams.id;
  }

  async ngOnInit(): Promise<any> {
    const data = await this.tastyApi.getRecipe(this.recipeId).toPromise();
    this.recipeDetails = data;
    this.isLoading = false;
    if (this.jwtService.getJwt()) {
      this.rest.getRecipes().then((res) => {
        this.usersRecipes = res.data;
        for (let i = 0; i < this.usersRecipes.length; i++) {
          if (
            this.usersRecipes[i].recipeId === this.recipeDetails.id.toString()
          ) {
            this.itemSaved = true;
            break;
          } else {
            this.itemSaved = false;
          }
        }
      });
    }

    // this.recipeDetails = this.tastyApi.recipeDetail;
  }

  // getRecipeDetails() {
  //   this.tastyApi.getRecipe(this.recipeId).subscribe((data) => {
  //     this.recipeDetails = data;
  //     console.log(this.recipeDetails);
  //   });
  // }

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
