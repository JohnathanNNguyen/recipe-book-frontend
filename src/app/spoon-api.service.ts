import { Secrets } from '.secrets/secrets';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpoonAPIService {
  recipeDetail;
  constructor(private http: HttpClient) {}

  // getRandomRecipes() {
  //   return this.http.get('https://api.spoonacular.com/recipes/random', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     params: {
  //       number: '21',
  //       apiKey: Secrets.APIKEY,
  //     },
  //   });
  // }

  tastyApiList() {
    return this.http.get(
      'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&canonical_id=recipe',
      {
        headers: {
          'X-Rapidapi-Key':
            'e1a2323f22msh3831f1dfbef5c79p1bab52jsn93cf9b53a8eb',
          'X-Rapidapi-Host': 'tasty.p.rapidapi.com',
          useQueryString: 'true',
        },
      }
    );
  }

  getRecipe(id: string) {
    return this.http.get(
      'https://tasty.p.rapidapi.com/recipes/detail?id=' + id,
      {
        headers: {
          'X-Rapidapi-Key':
            'e1a2323f22msh3831f1dfbef5c79p1bab52jsn93cf9b53a8eb',
          'X-Rapidapi-Host': 'tasty.p.rapidapi.com',
          useQueryString: 'true',
        },
      }
    );
  }
}
