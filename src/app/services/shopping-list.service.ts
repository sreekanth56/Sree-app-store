import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredianteChanged = new Subject<Ingredient[]>();


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
    this.ingredianteChanged.next(this.ingredients.slice());
  }

  addIngrediant(ingrediants: Ingredient[]){

    this.ingredients.push(...ingrediants);
    this.ingredianteChanged.next(this.ingredients.slice());

  }
}
