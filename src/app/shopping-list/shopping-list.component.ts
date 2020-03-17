import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[]= [];
  igChangeSubscription: Subscription;

  constructor(private shoppingListServices: ShoppingListService) { }

  ngOnInit(): void {

   this.ingredients = this.shoppingListServices.getIngredients();

   this.igChangeSubscription = this.shoppingListServices.ingredianteChanged.subscribe((ingredients: Ingredient[])=>{
    this.ingredients = ingredients;
   })
  }

  ngOnDestroy(){
    this.igChangeSubscription.unsubscribe();
  }

}
