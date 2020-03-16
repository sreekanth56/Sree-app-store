import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipes: Recipe[] = [

    new Recipe('test recipe',' a simple test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6hxsP6_EzISOAE_dLoA1Ld5kMDFvU7QVxJUJUBpuFjYFou7GO'),

    new Recipe('test recipe',' a simple test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf1Dp-9pCpQdsXxkw3wjUk5ep8ii1hFzARuuGFItD3JsQjWaxo')
  ];

  getRecipe(){
    return this.recipes.slice();
  }
}
