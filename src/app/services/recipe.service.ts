import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  constructor(private shoppingListServices: ShoppingListService) { }

  recipes: Recipe[] = [

    new Recipe(
      'test recipe',
      ' a simple test recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6hxsP6_EzISOAE_dLoA1Ld5kMDFvU7QVxJUJUBpuFjYFou7GO',
      [
        new Ingredient('meat',1),
        new Ingredient('French fries', 20)
      ]
      ),

    new Recipe(
      'test recipe',
      ' a simple test recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf1Dp-9pCpQdsXxkw3wjUk5ep8ii1hFzARuuGFItD3JsQjWaxo',
      [
        new Ingredient('Bunts',2),
        new Ingredient('Meat', 2)
      ]
      )
  ];

  getRecipe(){
    return this.recipes.slice();
  }

  getRecipes(index: number){

    return this.recipes[index];

  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){

    this.shoppingListServices.addIngrediant(ingredients);

  }
}
