import { Secrets } from '.secrets/secrets';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TastyAPIService {
  recipeDetail;
  searchedRecipes;
  constructor(private http: HttpClient) {}

  tastyApiList() {
    return this.http.get(
      'https://tasty.p.rapidapi.com/recipes/list?from=0&size=21',
      {
        headers: {
          'X-Rapidapi-Key': Secrets.TastyAPIKEY,
          'X-Rapidapi-Host': Secrets.TastyHost,
          useQueryString: 'true',
        },
      }
    );
  }

  getRecipe(inputId: string) {
    return this.http.get('https://tasty.p.rapidapi.com/recipes/detail', {
      headers: {
        'X-Rapidapi-Key': Secrets.TastyAPIKEY,
        'X-Rapidapi-Host': Secrets.TastyHost,
        useQueryString: 'true',
      },
      params: {
        id: inputId,
      },
    });
  }

  searchRecipes(input: string) {
    return this.http.get(
      'https://tasty.p.rapidapi.com/recipes/list?from=0&size=21&',
      {
        headers: {
          'X-Rapidapi-Key': Secrets.TastyAPIKEY,
          'X-Rapidapi-Host': Secrets.TastyHost,
          useQueryString: 'true',
        },
        params: {
          q: input,
        },
      }
    );
  }

  getRecipesFromBackend() {
    return this.http.get('http://localhost:3000/recipes');
  }

  // saveRecipesToBackend(){
  //   return this.http.post('http://localhost:4200/save',
  //   body: )
  //   .toPromise()

  // }
}
