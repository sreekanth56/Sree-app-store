import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredianteChanged = new EventEmitter<Ingredient[]>();


  private ingredients: Ingredient[]= [

    new Ingredient('apple',22),
    new Ingredient('orange', 10)

  ];

  constructor() { }


  getIngredients(){

   return this.ingredients.slice();
  }

  addIngrediants(ingrediant: Ingredient){

    this.ingredients.push(ingrediant);

    this.ingredianteChanged.emit(this.ingredients.slice());


  }
}
