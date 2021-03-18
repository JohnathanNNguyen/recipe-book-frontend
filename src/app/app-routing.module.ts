import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { SearchRecipesComponent } from './search-recipes/search-recipes.component';
import { UsersRecipesComponent } from './users-recipes/users-recipes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchRecipesComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'recipes', component: RecipeDetailComponent },
  { path: 'user/recipe', component: UsersRecipesComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
